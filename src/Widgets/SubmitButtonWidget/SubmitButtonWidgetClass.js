import * as Scrivito from "scrivito";

const SubmitButtonWidget = Scrivito.provideWidgetClass("SubmitButtonWidget", {
  attributes: {
    buttonText: "string",
  },
  extractTextAttributes: ["buttonText"],
});

export default SubmitButtonWidget;
