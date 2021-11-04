import * as Scrivito from "scrivito";

const GenderInputWidget = Scrivito.provideWidgetClass("GenderInputWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default GenderInputWidget;
