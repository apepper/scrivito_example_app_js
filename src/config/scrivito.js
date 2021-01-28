import * as Scrivito from "scrivito";

const baseUrls = {
  default: "http://localhost:8080/en",

  german: "http://localhost:8080/de",
  polish: "http://localhost:8080/pl",
};

const config = {
  tenant: process.env.SCRIVITO_TENANT,
  adoptUi: true,
  baseUrlForSite: (siteId) => baseUrls[siteId],
  siteForUrl: (url) =>
    Object.keys(baseUrls)
      .map((siteId) =>
        url.startsWith(baseUrls[siteId])
          ? { siteId, baseUrl: baseUrls[siteId] }
          : undefined
      )
      .filter((result) => result)[0],
};

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

if (process.env.SCRIVITO_ENDPOINT) {
  config.endpoint = process.env.SCRIVITO_ENDPOINT;
}

if (process.env.SCRIVITO_PRERENDER) {
  config.priority = "background";
}

Scrivito.configure(config);
