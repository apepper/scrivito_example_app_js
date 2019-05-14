/* eslint no-console: "off" */
import * as Scrivito from "scrivito";
import formatDate from "../utils/formatDate";

export async function prerenderSitemapUrls(
  objClassesWhitelist,
  offset,
  objsPerBatch
) {
  console.time("[prerenderSitemapUrls]");

  const batchMessage = `Objs with offset ${offset} and objsPerBatch ${objsPerBatch} loaded`;
  console.time(batchMessage);
  const pages = await Scrivito.load(() =>
    prerenderSitemapSearch(objClassesWhitelist)
      .offset(offset)
      .take(objsPerBatch)
  );
  console.timeEnd(batchMessage);
  console.log(`Loaded ${pages.length} objs`);

  const sitemapUrls = await Scrivito.load(() => pages.map(pageToSitemapUrl));
  console.timeEnd("[prerenderSitemapUrls]");
  return sitemapUrls;
}

export function prerenderSitemapSearch(objClassesWhitelist) {
  return Scrivito.Obj.where("_objClass", "equals", objClassesWhitelist).andNot(
    "robotsIndex",
    "equals",
    "no"
  );
}

function pageToSitemapUrl(page) {
  return {
    url: {
      loc: Scrivito.urlFor(page),
      lastmod: formatDate(page.lastChanged(), "yyyy-mm-dd"),
    },
  };
}
