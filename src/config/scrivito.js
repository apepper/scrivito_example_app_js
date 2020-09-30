import * as Scrivito from "scrivito";

export function configureScrivito(options) {
  const baseUrls = {
    default: "http://localhost:8080/default",

    berlin: "http://localhost:8080/berlin",
    hamburg: "http://localhost:8080/hamburg",
    munich: "http://localhost:8080/munich",
    cologne: "http://localhost:8080/cologne",
    frankfurt: "http://localhost:8080/frankfurt",
    stuttgart: "http://localhost:8080/stuttgart",
  };

  const config = {
    adoptUi: "http://localhost:8090",
    autoConvertAttributes: true,
    optimizedWidgetLoading: true,
    strictSearchOperators: true,
    contentTagsForEmptyAttributes: false,
    tenant: process.env.SCRIVITO_TENANT,
    unstable: {
      assetUrlBase: "http://localhost:8091",
      getSiteIdForObj: () => "intranet",
      trustedUiOrigins: [
        "http://localhost:8090",
        "http://127.0.0.1:8090",
        "https://*.scrivito-ui.pages.dev",
      ],
    },
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

  if (process.env.SCRIVITO_ORIGIN) config.origin = process.env.SCRIVITO_ORIGIN;

  if (process.env.SCRIVITO_ENDPOINT) {
    config.endpoint = process.env.SCRIVITO_ENDPOINT;
  }

  if (options?.priority) config.priority = options.priority;

  Scrivito.configure(config);
}
