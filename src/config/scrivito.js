import * as Scrivito from "scrivito";

const config = {
  tenant: process.env.SCRIVITO_TENANT,
  unstable: {
    assetUrlBase: "http://localhost:8090/scrivito/",
    trustedUiOrigins: [
      "https://deploy-preview-5784--scrivito-ui-dev.netlify.com",
      "https://deploy-preview-5825--scrivito-ui-dev.netlify.com/",
    ],
  },
};

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

Scrivito.configure(config);
