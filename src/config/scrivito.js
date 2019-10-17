import * as Scrivito from "scrivito";

const config = {
  tenant: process.env.SCRIVITO_TENANT,
  unstable: {
    assetUrlBase: "http://localhost:8090/scrivito",
    trustedUiOrigins: ["http://localhost:8090"],
  },
};

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

Scrivito.configure(config);
