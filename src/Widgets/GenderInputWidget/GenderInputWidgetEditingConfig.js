import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("GenderInputWidget", {
  title: "Gender Input",
  attributes: {
    required: {
      title: "Mandatory",
    },
  },
  initialContent: {
    label: "Gender",
  },
  properties: ["label", "required"],
});
