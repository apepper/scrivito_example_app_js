import * as Scrivito from "scrivito";
import formCheckboxWidgetIcon from "../../assets/images/form_checkbox_widget.svg";

Scrivito.provideEditingConfig("FormCheckboxWidget", {
  title: "Form: Checkbox",
  thumbnail: formCheckboxWidgetIcon,
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
