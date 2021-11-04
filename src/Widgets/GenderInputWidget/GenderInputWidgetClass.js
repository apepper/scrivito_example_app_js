import * as Scrivito from "scrivito";

const GenderInputWidget = Scrivito.provideWidgetClass("GenderInputWidget", {
  attributes: {
    label: "string",
    required: "boolean",
  },
  extractTextAttributes: [],
});

export default GenderInputWidget;
