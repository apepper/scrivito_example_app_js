import * as Scrivito from "scrivito";

const FormCheckboxWidget = Scrivito.provideWidgetClass("FormCheckboxWidget", {
  attributes: {
    label: "html",
    required: "boolean",
  },
  extractTextAttributes: [],
});

export default FormCheckboxWidget;
