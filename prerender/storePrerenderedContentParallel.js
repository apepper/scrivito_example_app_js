const dotenv = require("dotenv");
const filesize = require("filesize");
const fse = require("fs-extra");

const { extendRedirects } = require("./extendRedirects");
const {
  generatePrerenderServerArchive,
} = require("./generatePrerenderServerArchive");
const { invokeLambda } = require("./invokeLambda");
const { prerenderSitemapOnLambda } = require("./prerenderSitemapOnLambda");
const { reportError } = require("./reportError");

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
  promises.push(
    prerenderSitemapOnLambda(
      TARGET_DIR,
      storedFiles,
      SITEMAP_OBJS_PER_WORKER,
      prerenderServerArchive
    )
  );
  await Promise.all(promises);
  log("👨‍🔧  Lambdas are done.");

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
