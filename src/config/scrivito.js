import * as Scrivito from "scrivito";

export function configureScrivito(options) {
  const config = {
    adoptUi: true,
    autoConvertAttributes: true,
    optimizedWidgetLoading: true,
    strictSearchOperators: true,
    contentTagsForEmptyAttributes: false,
    tenant: process.env.SCRIVITO_TENANT,
    unstable: {
      trustedUiOrigins: [
        "http://localhost:8090",
        "https://*.d2gu55vvqejsqp.amplifyapp.com",
        "https://*.netlify.app",
        "https://*.netlify.com",
        "https://*.pages.dev",
        "https://dt5t498v8txnt.cloudfront.net",
      ],
    },
  };

  if (process.env.SCRIVITO_ORIGIN) config.origin = process.env.SCRIVITO_ORIGIN;

  if (process.env.SCRIVITO_ENDPOINT) {
    config.endpoint = process.env.SCRIVITO_ENDPOINT;
  }

  if (options?.priority) config.priority = options.priority;

  Scrivito.configure(config);
}
