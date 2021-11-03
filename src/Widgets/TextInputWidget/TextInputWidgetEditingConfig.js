import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("TextInputWidget", {
  title: "Text Input",
  attributes: {
    required: {
      title: "Mandatory",
    },
    type: {
      title: "Input Type",
      values: [
        { value: "name", title: "Name" },
        { value: "given_name", title: "Given name" },
        { value: "family_name", title: "Family name" },
        { value: "middle_name", title: "Middle name" },
        { value: "company", title: "Company" },
      ],
    },
  },
  initialContent: {
    label: "Company",
    placeholder: "Your company name",
    type: "company",
  },
  properties: ["type", "label", "placeholder", "required"],
});
