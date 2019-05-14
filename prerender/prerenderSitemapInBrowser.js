const { sitemapUrlsToSitemapXml } = require("./sitemapUrlsToSitemapXml");
const { storeResult } = require("./storeResult");

exports.prerenderSitemapInBrowser = async function prerenderSitemapInBrowser(
  targetDir,
  storedFiles,
  page
) {
  console.log(
    "  🖥️️  [prerenderSitemapInBrowser] Executing javascript command prerenderSitemapCount..."
  );
  const sitemapCount = await page.evaluate("prerenderSitemapCount()");
  console.log(
    `  🖥️️  [prerenderSitemapInBrowser] Executed javascript command prerenderSitemapCount (result: ${sitemapCount}).`
  );

  console.log(
    "  🖥️️  [prerenderSitemapInBrowser] Executing javascript command prerenderSitemapUrls..."
  );
  const sitemapUrls = await page.evaluate(
    `prerenderSitemapUrls(0, ${sitemapCount})`
  );
  const content = sitemapUrlsToSitemapXml(sitemapUrls);

  console.log(
    `  🖥️️  [prerenderSitemapInBrowser] Executed javascript command prerenderSitemapUrls (result: ${
      content.length
    }).`
  );
  await storeResult(targetDir, storedFiles, {
    filename: "/sitemap.xml",
    content,
  });
};
