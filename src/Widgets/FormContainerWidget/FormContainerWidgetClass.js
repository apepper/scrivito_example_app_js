import * as Scrivito from "scrivito";

const FormContainerWidget = Scrivito.provideWidgetClass("FormContainerWidget", {
  attributes: {
    content: "widgetlist",
    formId: "string",
    failedMessage: "string",
    submittedMessage: "string",
    submittingMessage: "string",
    hiddenFields: ["widgetlist", { only: "FormHiddenFieldWidget" }],
  },
  extractTextAttributes: ["content"],
});

export default FormContainerWidget;
