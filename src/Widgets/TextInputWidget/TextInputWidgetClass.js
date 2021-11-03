import * as Scrivito from "scrivito";

const TextInputWidget = Scrivito.provideWidgetClass("TextInputWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default TextInputWidget;
