const fse = require("fs-extra");
const childProcess = require("child_process");

const TARGET_DIR = "vendor/scrivito";
const CONFIG_PATCH = `diff --git a/src/config/scrivito.js b/src/config/scrivito.js
index 0c7ee9ecc3..3b13923bf7 100644
--- a/src/config/scrivito.js
+++ b/src/config/scrivito.js
@@ -7,6 +7,7 @@ export function configureScrivito(options) {
     strictSearchOperators: true,
     contentTagsForEmptyAttributes: false,
     tenant: process.env.SCRIVITO_TENANT,
+    unstable: { assetUrlBase: "/scrivito" },
   };

   if (process.env.SCRIVITO_ORIGIN) config.origin = process.env.SCRIVITO_ORIGIN;`;

run().catch((e) => {
  console.log("❌ Failed due to the following error -", e.message);
  process.exitCode = 1;
});

async function run() {
  console.log("Building scrivito package");
  exec("cd ../scrivito_js/js && npm run package");

  console.log(`Removing ${TARGET_DIR}/`);
  await fse.remove(TARGET_DIR);

  console.log("Copying scrivito");
  await fse.copy("../scrivito_js/js/build/npm_scrivito/", TARGET_DIR);
  await fse.copy("../scrivito_js/js/build/scrivito", "public/scrivito");

  console.log("Reinstalling scrivito npm package");
  exec("npm remove scrivito");
  exec("npm i file:vendor/scrivito");
  exec("npm i");

  console.log("Configuring new asset location");
  try {
    exec(`echo '${CONFIG_PATCH}' | git apply`);
  } catch {
    console.log(`❌ Could not apply config patch, ignoring`);
  }

  console.log(`✅ Done.`);
}

function exec(cmd) {
  return childProcess.execSync(cmd, { stdio: [0, 1, 2] });
}