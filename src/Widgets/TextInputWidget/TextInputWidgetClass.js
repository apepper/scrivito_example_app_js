import * as Scrivito from "scrivito";

const TextInputWidget = Scrivito.provideWidgetClass("TextInputWidget", {
  attributes: {
    label: "string",
    placeholder: "string",
  },
  extractTextAttributes: [],
});

export default TextInputWidget;
