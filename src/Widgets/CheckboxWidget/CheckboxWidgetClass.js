import * as Scrivito from "scrivito";

const CheckboxWidget = Scrivito.provideWidgetClass("CheckboxWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default CheckboxWidget;
