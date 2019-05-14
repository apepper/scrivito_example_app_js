const tar = require("tar");
const { PassThrough } = require("stream");

const { storeResult } = require("./storeResult");

exports.processLambdaResponse = async function processLambdaResponse(
  targetDir,
  storedFiles,
  body
) {
  return new Promise((resolve, reject) => {
    const storeResultPromises = [];
    decodeBase64ToStream(body)
      .pipe(new tar.Parse({ filter: tarPath => !tarPath.endsWith("/") }))
      .on("error", error => reject(error))
      .on("entry", entry =>
        storeResultPromises.push(storeResultFor(targetDir, storedFiles, entry))
      )
      .on("finish", () =>
        Promise.all(storeResultPromises)
          .then(() => resolve())
          .catch(error => reject(error))
      );
  });
};

async function storeResultFor(targetDir, storedFiles, entry) {
  const filename = entry.path;
  const collected = await entry.collect();
  const content = Buffer.concat(collected).toString();
  return storeResult(targetDir, storedFiles, { filename, content });
}

function decodeBase64ToStream(base64String) {
  const buffer = Buffer.from(base64String, "base64");
  const readable = new PassThrough();
  readable.end(buffer);
  return readable;
}
