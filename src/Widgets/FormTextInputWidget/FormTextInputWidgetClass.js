import * as Scrivito from "scrivito";

const FormTextInputWidget = Scrivito.provideWidgetClass("FormTextInputWidget", {
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
          "custom_text_area",
        ],
      },
    ],
    customFieldName: "string",
  },
  extractTextAttributes: [],
});

export default FormTextInputWidget;
