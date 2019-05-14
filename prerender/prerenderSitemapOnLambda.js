const { invokeLambda } = require("./invokeLambda");
const { sitemapUrlsToSitemapXml } = require("./sitemapUrlsToSitemapXml");
const { storeResult } = require("./storeResult");

exports.prerenderSitemapOnLambda = async function prerenderSitemapOnLambda(
  targetDir,
  storedFiles,
  sitemapObjsPerWorker,
  prerenderServerArchive
) {
  console.log(
    "  👨‍🔧 [prerenderSitemapOnLambda] Calculating prerenderSitemapCount on Lambda..."
  );
  const sitemapCount = await invokeLambda(
    targetDir,
    storedFiles,
    prerenderServerArchive,
    "prerenderSitemapCount()",
    "plainOutput"
  );
  console.log(
    `  👨‍🔧 [prerenderSitemapOnLambda] prerenderSitemapCount is ${sitemapCount}`
  );

  const parallelSitemapWorkerCount = Math.ceil(
    sitemapCount / sitemapObjsPerWorker
  );
  const promises = [...Array(parallelSitemapWorkerCount).keys()].map(number =>
    invokeLambda(
      targetDir,
      storedFiles,
      prerenderServerArchive,
      `prerenderSitemapUrls(${number *
        sitemapObjsPerWorker}, ${sitemapObjsPerWorker})`,
      "plainOutput"
    )
  );

  const results = await Promise.all(promises);
  const sitemapUrls = [].concat(...results);
  const content = sitemapUrlsToSitemapXml(sitemapUrls);

  await storeResult(targetDir, storedFiles, {
    filename: "/sitemap.xml",
    content,
  });
};
