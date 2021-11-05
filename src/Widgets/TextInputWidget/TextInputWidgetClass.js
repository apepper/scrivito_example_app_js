import * as Scrivito from "scrivito";

const TextInputWidget = Scrivito.provideWidgetClass("TextInputWidget", {
  attributes: {
    label: "string",
    placeholder: "string",
    required: "boolean",
    type: [
      "enum",
      {
        values: [
          "email",
          "name",
          "given_name",
          "family_name",
          "middle_name",
          "company",
          "phone_number",
        ],
      },
    ],
  },
  extractTextAttributes: [],
});

export default TextInputWidget;
