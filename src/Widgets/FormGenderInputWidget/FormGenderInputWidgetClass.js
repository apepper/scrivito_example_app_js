import * as Scrivito from "scrivito";

const FormGenderInputWidget = Scrivito.provideWidgetClass(
  "FormGenderInputWidget",
  {
    attributes: {
      label: "string",
      required: "boolean",
    },
    extractTextAttributes: [],
  }
);

export default FormGenderInputWidget;
