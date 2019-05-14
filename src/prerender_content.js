/* eslint no-console: "off" */
import "react";
import "react-dom";
import * as Scrivito from "scrivito";
import filesize from "filesize";
import "./Objs";
import "./Widgets";
import "./config";
import {
  prerenderObjs,
  prerenderObjsSearch,
} from "./prerenderContent/prerenderObjs";
import {
  prerenderSitemapUrls,
  prerenderSitemapSearch,
} from "./prerenderContent/prerenderSitemapUrls";

const PRERENDER_OBJ_CLASSES_BLACKLIST = [
  "Download",
  "Image",
  "Redirect",
  "Video",
];

const SITEMAP_OBJ_CLASSES_WHITELIST = [
  "Author",
  "Blog",
  "BlogPost",
  "Event",
  "Homepage",
  "Job",
  "LandingPage",
  "Page",
];

window.prerenderSitemapCount = async () =>
  Scrivito.load(() =>
    prerenderSitemapSearch(SITEMAP_OBJ_CLASSES_WHITELIST).count()
  );

window.prerenderSitemapUrls = async (offset, objsPerBatch) =>
  prerenderSitemapUrls(SITEMAP_OBJ_CLASSES_WHITELIST, offset, objsPerBatch);

window.prerenderObjsTotalCount = async () =>
  Scrivito.load(() =>
    prerenderObjsSearch(PRERENDER_OBJ_CLASSES_BLACKLIST).count()
  );

window.prerenderObjs = async (offset, objsPerBatch) =>
  prerenderObjs(
    PRERENDER_OBJ_CLASSES_BLACKLIST,
    offset,
    objsPerBatch,
    window.storeResult,
    window.reportError
  );

// The following method will be overwritten by puppeteer in storePrerenderedContent.
// It is only here, to simplify debugging in the browser
window.storeResult = async ({ filename, content }) => {
  console.log(
    `[storeResult] received "${filename}" (file size: ${filesize(
      content.length
    )})`
  );
};

// The following method will be overwritten by puppeteer in storePrerenderedContent.
// It is only here, to simplify debugging in the browser
window.reportError = (message, ...args) => {
  console.log(`[reportError] ${message}`, ...args);
};
