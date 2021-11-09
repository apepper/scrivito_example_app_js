import * as Scrivito from "scrivito";
import formGenderInputWidgetIcon from "../../assets/images/form_gender_input_widget.svg";

Scrivito.provideEditingConfig("FormGenderInputWidget", {
  title: "Form: Gender Input",
  thumbnail: formGenderInputWidgetIcon,
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
