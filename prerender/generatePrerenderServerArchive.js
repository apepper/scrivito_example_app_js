const tar = require("tar");

exports.generatePrerenderServerArchive = async function generatePrerenderServerArchive(
  sourceDir
) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    tar
      .create({ gzip: true, cwd: sourceDir }, [
        "_prerender_content.html",
        "prerender_content.js",
      ])
      .on("data", chunk => chunks.push(chunk))
      .on("error", error => reject(error))
      .on("finish", () => {
        const buffer = Buffer.concat(chunks);
        resolve(buffer.toString("base64"));
      });
  });
};
