import * as Scrivito from "scrivito";

const CheckboxWidget = Scrivito.provideWidgetClass("CheckboxWidget", {
  attributes: {
    label: "html",
    required: "boolean",
  },
  extractTextAttributes: [],
});

export default CheckboxWidget;
