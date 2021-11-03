import * as Scrivito from "scrivito";

const SubmitButtonWidget = Scrivito.provideWidgetClass("SubmitButtonWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default SubmitButtonWidget;
