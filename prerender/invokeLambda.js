const AWS = require("aws-sdk");
const filesize = require("filesize");

const { processLambdaResponse } = require("./processLambdaResponse");
const { stringFromEnv } = require("./stringFromEnv");

exports.invokeLambda = async function invokeLambda(
  targetDir,
  storedFiles,
  prerenderServerArchive,
  prerenderCommand,
  resourceType
) {
  const functionIdentifier = `  👨‍🔧 [invokeLambda] Lambda function ${prerenderCommand}`;
  console.time(`${functionIdentifier} finished`);
  return new Promise((resolve, reject) => {
    const requestBody = JSON.stringify({
      prerenderCommand,
      prerenderServerArchive,
      resourceType,
    });
    const params = {
      FunctionName: stringFromEnv("PARALLEL_PRERENDER_AWS_LAMBDA_FUNCTION"),
      Payload: JSON.stringify({ body: requestBody }),
    };
    lambdaInstance().invoke(params, async (err, data) => {
      if (err) {
        return reject(err);
      }

      if (data.FunctionError) {
        return reject(
          new Error(
            `${functionIdentifier} failed: ${data.Payload} (FunctionError ${
              data.FunctionError
            })`
          )
        );
      }

      if (!isSuccessful(data.StatusCode)) {
        reject(
          new Error(
            `${functionIdentifier} failed: StatusCode ${data.StatusCode}`
          )
        );
      }

      const { body, statusCode, isBase64Encoded } = JSON.parse(data.Payload);
      if (!isSuccessful(statusCode)) {
        reject(
          new Error(
            `${functionIdentifier} response failed: ${body} (StatusCode ${statusCode})`
          )
        );
      }

      if (resourceType === "storedResults") {
        if (!isBase64Encoded) {
          throw new Error(
            "Requested resourceType storedResults, but got a non base64 response!"
          );
        }
        const timeIdentifier = `${functionIdentifier} response processed (response size: ${filesize(
          data.Payload.length
        )})`;
        console.time(timeIdentifier);
        await processLambdaResponse(targetDir, storedFiles, body);
        console.timeEnd(timeIdentifier);
        console.timeEnd(`${functionIdentifier} finished`);
        resolve();
      } else {
        console.log(
          `${functionIdentifier} response processed (response size: ${filesize(
            data.Payload.length
          )})`
        );
        console.timeEnd(`${functionIdentifier} finished`);
        resolve(JSON.parse(body));
      }
    });
  });
};

function isSuccessful(statusCode) {
  return [200, 202, 204].includes(statusCode);
}

function lambdaInstance() {
  const region = stringFromEnv("PARALLEL_PRERENDER_AWS_REGION");
  const accessKeyId = stringFromEnv("PARALLEL_PRERENDER_AWS_ACCESS_KEY_ID");
  const secretAccessKey = stringFromEnv(
    "PARALLEL_PRERENDER_AWS_SECRET_ACCESS_KEY"
  );

  return new AWS.Lambda({ region, accessKeyId, secretAccessKey });
}
