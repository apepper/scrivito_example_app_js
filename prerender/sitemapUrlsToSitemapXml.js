const jsontoxml = require("jsontoxml");

exports.sitemapUrlsToSitemapXml = sitemapUrls => {
  return jsontoxml(
    [
      {
        name: "urlset",
        attrs: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" },
        children: sitemapUrls,
      },
    ],
    { xmlHeader: true }
  );
};
