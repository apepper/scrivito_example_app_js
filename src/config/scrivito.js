import * as Scrivito from "scrivito";

const config = {
  tenant: process.env.SCRIVITO_TENANT,
  unstable: {
    assetUrlBase:
      "https://deploy-preview-5784--scrivito-ui-dev.netlify.com/scrivito/",
    trustedUiOrigins: [
      "https://deploy-preview-5784--scrivito-ui-dev.netlify.com",
    ],
  },
};

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

Scrivito.configure(config);
