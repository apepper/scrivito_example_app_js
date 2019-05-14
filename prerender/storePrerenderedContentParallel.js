const dotenv = require("dotenv");
const filesize = require("filesize");
const fse = require("fs-extra");
const puppeteer = require("puppeteer");

const { extendRedirects } = require("./extendRedirects");
const {
  generatePrerenderServerArchive,
} = require("./generatePrerenderServerArchive");
const { prerenderSitemapInBrowser } = require("./prerenderSitemapInBrowser");
const { invokeLambda } = require("./invokeLambda");
const { reportError } = require("./reportError");
const { startServer } = require("./startServer");
const { storeResult } = require("./storeResult");
const { visitUrl } = require("./visitUrl");

const OBJS_PER_WORKER = 32;
const SITEMAP_OBJS_PER_WORKER = 1000;
const SOURCE_DIR = "build";
const TARGET_DIR = "buildPrerendered";

async function storePrerenderedContentParallel() {
  console.time("[storePrerenderedContentParallel]");
  dotenv.config();
  const storedFiles = [];

  log(`Removing ${TARGET_DIR}/`);
  await fse.remove(TARGET_DIR);

  log(`Copying ${SOURCE_DIR}/ to ${TARGET_DIR}/`);
  await fse.copy(SOURCE_DIR, TARGET_DIR);

  let filesRemoved = 0;
  await Promise.all(
    ["_prerender_content.html", "prerender_content.js"].map(async filename => {
      log(`✨ Removing now obsolete file ${filename}...`);
      await fse.remove(`${TARGET_DIR}/${filename}`);
      filesRemoved += 1;
    })
  );

  log(`🎁  Packing prerenderServerArchive...`);
  const prerenderServerArchive = await generatePrerenderServerArchive(
    SOURCE_DIR
  );
  log(
    `🎁  Packed prerenderServerArchive (file size: ${filesize(
      prerenderServerArchive.length
    )})`
  );

  log("🗄️  Starting express server...");
  const server = await startServer(SOURCE_DIR);
  log("🗄️  Express server started...");

  log("🖥️️  Starting browser...");
  const browser = await puppeteer.launch();
  log("🖥️️  Browser started");

  const url = "http://localhost:8080/_prerender_content.html";
  log(`🖥️️  Visiting ${url} ...`);
  const page = await visitUrl(browser, url);

  log(`🖥️️  Redefining window.storeResult...`);
  await page.exposeFunction("storeResult", args =>
    storeResult(TARGET_DIR, storedFiles, args)
  );

  log(`🖥️️  Redefining window.reportError...`);
  await page.exposeFunction("reportError", reportError);

  log("👨‍🔧  Calculating prerenderObjsTotalCount on Lambda...");
  const totalObjsCount = await invokeLambda(
    TARGET_DIR,
    storedFiles,
    prerenderServerArchive,
    "prerenderObjsTotalCount()",
    "plainOutput"
  );
  log(`👨‍🔧  prerenderObjsTotalCount is ${totalObjsCount}`);

  log("👨‍🔧  Invoking Lambdas...");
  const parallelWorkerCount = Math.ceil(totalObjsCount / OBJS_PER_WORKER);
  const promises = [...Array(parallelWorkerCount).keys()].map(number =>
    invokeLambda(
      TARGET_DIR,
      storedFiles,
      prerenderServerArchive,
      `prerenderObjs(${number * OBJS_PER_WORKER}, ${OBJS_PER_WORKER})`,
      "storedResults"
    )
  );

  await prerenderSitemapInBrowser(TARGET_DIR, storedFiles, page);

  log("🖥️️  Closing the browser...");
  await browser.close();

  log("🗄️  Closing express server...");
  await server.close();

  await extendRedirects(TARGET_DIR, storedFiles, SOURCE_DIR);

  log(
    `📦 Added ${storedFiles.length} files to and` +
      ` removed ${filesRemoved} files from folder ${TARGET_DIR}!`
  );

  console.timeEnd("[storePrerenderedContentParallel]");
}

function log(message, ...args) {
  console.log(`[storePrerenderedContentParallel] ${message}`, ...args);
}

storePrerenderedContentParallel().catch(e => {
  reportError("An error occurred!", e);
  process.exitCode = 1;
});
