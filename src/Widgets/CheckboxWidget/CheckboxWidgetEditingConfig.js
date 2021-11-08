import * as Scrivito from "scrivito";
import form_widget_checkbox from "../../assets/images/form_widget_checkbox.svg";

Scrivito.provideEditingConfig("CheckboxWidget", {
  title: "Checkbox",
  thumbnail: form_widget_checkbox,
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
