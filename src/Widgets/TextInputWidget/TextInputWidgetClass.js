import * as Scrivito from "scrivito";

const TextInputWidget = Scrivito.provideWidgetClass("TextInputWidget", {
  attributes: {
    label: "string",
    placeholder: "string",
    type: [
      "enum",
      {
        values: ["name", "given_name", "family_name", "middle_name", "company"],
      },
    ],
  },
  extractTextAttributes: [],
});

export default TextInputWidget;
