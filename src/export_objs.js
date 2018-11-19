/* eslint no-console: "off" */
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as Scrivito from "scrivito";
import Helmet from "react-helmet";
import "./Objs";
import "./Widgets";
import App from "./App";
import "./config";

const blacklistObjClasses = ["Download", "Image", "Redirect", "Video"];

function allObjs() {
  return [
    ...Scrivito.Obj.all().andNot("_objClass", "equals", blacklistObjClasses),
  ];
}

function exportObj(obj) {
  // Tell helmet to pretend to run on a node server, not in a browser
  // See https://github.com/nfl/react-helmet/issues/310 for details
  Helmet.canUseDOM = false;

  return Scrivito.renderPage(obj, () => {
    const objId = obj.id();
    const bodyContent = ReactDOMServer.renderToStaticMarkup(<App />);
    const helmet = Helmet.renderStatic();
    const preloadDumpFileName = `preloadDump-${objId}.js`;

    return {
      objId,
      objUrl: Scrivito.urlFor(obj),
      htmlAttributes: helmet.htmlAttributes.toString(),
      headContent: `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        `,
      bodyAttributes: helmet.bodyAttributes.toString(),
      bodyContent,
      preloadDumpFileName,
    };
  })
    .then(({ result, preloadDump }) => {
      return {
        htmlContent: generateHtml(result),
        objId: result.objId,
        objUrl: result.objUrl,
        preloadDumpContent: generatePreloadDump(preloadDump),
        preloadDumpFileName: result.preloadDumpFileName,
      };
    })
    .catch(e => {
      const objId = obj.id();
      console.log(`❌  Error while processing obj ${objId}`, e);
      return { objId, errorDuringGeneration: true };
    });
}

function generateHtml({
  objId,
  htmlAttributes,
  headContent,
  bodyAttributes,
  bodyContent,
  preloadDumpFileName,
}) {
  return `<!DOCTYPE html>
<html ${htmlAttributes}>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="generator" content="Scrivito by Infopark AG (scrivito.com)">
  ${headContent}
  <link rel="preconnect" href="https://api.scrivito.com" crossorigin>
  <link rel="preconnect" href="https://api.scrivito.com">
  <link rel="stylesheet" href="/index.css">
</head>
<body ${bodyAttributes}>
  <div id="application" data-scrivito-prerendering-obj-id="${objId}">
    ${bodyContent}
  </div>
  <script src="/${preloadDumpFileName}"></script>
  <script async src="/index.js"></script>
</body>
</html>`;
}

function generatePreloadDump(preloadDump) {
  return `window.preloadDump = ${JSON.stringify(preloadDump)};`;
}

function exportObjs() {
  console.time("[exportObjs]");
  console.time("Loading all objs");
  return Scrivito.load(allObjs).then(objs => {
    console.timeEnd("Loading all objs");

    const promises = objs.map(obj => {
      console.time(`Exporting obj ${obj.id()}`);
      return exportObj(obj).then(result => {
        console.timeEnd(`Exporting obj ${obj.id()}`);
        return result;
      });
    });

    return Promise.all(promises).then(results => {
      const filteredResults = results.filter(
        result => !result.errorDuringGeneration
      );
      const exportedCount = filteredResults.length;
      const failedCount = results.length - exportedCount;
      console.log(
        `Exporting ${exportedCount} objs (skipped ${failedCount} due to failures)`
      );
      console.timeEnd("[exportObjs]");
      return filteredResults;
    });
  });
}

// Usage: window.exportObjs().then(results => ...);
window.exportObjs = exportObjs;
