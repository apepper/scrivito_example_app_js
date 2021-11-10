import * as Scrivito from "scrivito";

const FormCheckboxWidget = Scrivito.provideWidgetClass("FormCheckboxWidget", {
  attributes: {
    type: ["enum", { values: ["accept_terms", "custom"] }],
    customFieldName: "string",
    label: "html",
    required: "boolean",
  },
  extractTextAttributes: [],
});

export default FormCheckboxWidget;
