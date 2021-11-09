import * as Scrivito from "scrivito";

const FormSubmitButtonWidget = Scrivito.provideWidgetClass(
  "FormSubmitButtonWidget",
  {
    attributes: {
      buttonText: "string",
    },
    extractTextAttributes: ["buttonText"],
  }
);

export default FormSubmitButtonWidget;
