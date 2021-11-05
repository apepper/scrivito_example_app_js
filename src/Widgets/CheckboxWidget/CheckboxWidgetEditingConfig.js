import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("CheckboxWidget", {
  title: "Checkbox",
  attributes: {
    required: {
      title: "Mandatory",
    },
  },
  properties: ["label", "required"],
  initialContent: {
    required: true,
    label: "I agree to the terms and conditions",
  },
});
