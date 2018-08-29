const express = require('express');
const fs = require('fs');
const fse = require('fs-extra');
const nodeUrl = require('url');
const path = require('path');
const puppeteer = require('puppeteer');

const TARGET_DIR = 'build';
let server;
let browser;

async function staticExport() {
  console.time('[staticExport]');
  console.log('[staticExport] Starting...');

  let filesAdded = 0;
  let filesRemoved = 0;

  console.log('[staticExport] 🗄️  Starting express server...');
  server = await startServer();
  console.log('[staticExport] 🗄️  Express server started...');

  console.log('[staticExport] 🖥️️  Starting browser...');
  browser = await puppeteer.launch();
  console.log('[staticExport] 🖥️️  Browser started');

  const exportedObjs = await executeInBrowser(
    'http://localhost:8080/_export_objs.html',
    () => exportObjs()
  );
  console.log(`[staticExport] 🖥️️  Received ${ exportedObjs.length } objs.`);

  console.log(`[staticExport] Writing ${ exportedObjs.length } html files to disk...`);
  writeObjsToDisk(exportedObjs);
  filesAdded += exportedObjs.length;

  console.log('[staticExport] Creating sitemap.xml...');
  const sitemap = await executeInBrowser(
    'http://localhost:8080/_export_sitemap.html',
    () => exportSitemap()
  );
  fse.outputFileSync(`${ TARGET_DIR }/sitemap.xml`, sitemap);
  filesAdded += 1;
  console.log('[staticExport] Created sitemap.xml');

  [
    '_export_objs.html',
    '_export_sitemap.html',
    'export_objs.js',
    'export_sitemap.js',
  ].forEach(filename => {
    console.log(`[staticExport] ✨ Removing now obsolete file ${ filename }...`);
    fse.removeSync(`${TARGET_DIR}/${ filename }`);
    filesRemoved += 1;
  });

  console.log('[staticExport] 🖥️️  Closing the browser...');
  await browser.close();

  console.log('[staticExport] 🗄️  Closing express server...');
  await server.close();

  console.log(`[staticExport] 📦 Added ${ filesAdded } files to and remove ${ filesRemoved }`+
    ` files from folder ${ TARGET_DIR }!`);

  console.timeEnd('[staticExport]');
}

async function executeInBrowser(url, jsCommand) {
  console.log(`  [executeInBrowser] 🖥️️  Visiting ${ url } ...`);
  const page = await browser.newPage();
  page.on('console', msg => console.log('  [executeInBrowser]   🖥️️  [console]', msg.text()));
  try {
    await page.goto(url);
  } catch (e) {
    console.log(`  [executeInBrowser] 🖥️️  ❌  Could not visit ${ url } !` +
      ' Is a webserver running on 8080?');
    throw e;
  }

  console.log('  [executeInBrowser] 🖥️️  Executing javascript command...');
  const result = await page.evaluate(jsCommand);
  console.log(`  [executeInBrowser] 🖥️️  Executed javascript command.`);

  return result;
}

function startServer() {
  const buildPath = path.join(__dirname, 'build');
  const app = express();
  const staticMiddleware = express.static(buildPath);
  app.use(staticMiddleware);

  let server;
  return new Promise((resolve, reject) => {
    server = app.listen(8080, () => resolve(server));
  });
}

function writeObjsToDisk(results) {
  results.forEach(result => {
    const { objId, objUrl, preloadDump } = result;
    const fileName = filenameFromUrl(objUrl);
    const preloadDumpFileName = `preloadDump-${ objId }.js`;

    console.log(`  [writeObjsToDisk] Writing ${ fileName } (${ objId }) to disk...`);
    const htmlContent = generateHtml({ preloadDumpFileName, ...result });
    fse.outputFileSync(`${ TARGET_DIR }/${ fileName }`, htmlContent);

    console.log(`  [writeObjsToDisk] Writing ${ preloadDumpFileName } to disk...`);
    const preloadDumpContent = generatePreloadDump(preloadDump);
    fse.outputFileSync(`${ TARGET_DIR }/${ preloadDumpFileName }`, preloadDumpContent);
  });
}

function filenameFromUrl(url) {
  const uri = nodeUrl.parse(url);
  const pathname = uri.pathname;
  if (pathname === '/') {
    return '/index.html';
  }

  return `${ pathname }.html`;
}

function generateHtml({
  objId, htmlAttributes, headContent, bodyAttributes, bodyContent, preloadDumpFileName,
}) {
  const html = `<!DOCTYPE html>
<html ${ htmlAttributes }>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="generator" content="Scrivito by Infopark AG (scrivito.com)">
  ${ headContent }
  <link rel="preconnect" href="https://api.scrivito.com" crossorigin>
  <link rel="preconnect" href="https://api.scrivito.com">
  <link rel="stylesheet" href="/index.css">
</head>
<body ${ bodyAttributes }>
  <div id="application" data-scrivito-prerendering-obj-id="${objId}">
    ${ bodyContent }
  </div>
  <script src="/${ preloadDumpFileName }"></script>
  <script async src="/index.js"></script>
</body>
</html>`;

  // TODO: Remove workaround for host containing urls from scrivito.
  return html.replace(/http:\/\/localhost\:8080/g, '');
}

function generatePreloadDump(preloadDump) {
  return `
    var escapedPreloadDump = "${encodeURIComponent(preloadDump)}";
    window.preloadDump = decodeURIComponent(escapedPreloadDump);
  `;
}

staticExport().catch(e => {
  console.log('❌ An error occurred!', e);
  process.exit(1);
});
