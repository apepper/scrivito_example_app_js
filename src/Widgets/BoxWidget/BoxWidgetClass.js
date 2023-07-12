import * as Scrivito from "scrivito";

export const BoxWidget = Scrivito.provideWidgetClass("BoxWidget", {
  attributes: {
    body: "widgetlist",
    boxStyle: ["enum", { values: ["transparent", "white"] }],
    useOffset: "boolean",
    link: "link",
  },
  extractTextAttributes: ["body"],
});
