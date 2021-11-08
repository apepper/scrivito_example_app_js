import * as Scrivito from "scrivito";
import form_widget_gender from "../../assets/images/form_widget_gender.svg";


Scrivito.provideEditingConfig("GenderInputWidget", {
  title: "Gender Input",
  thumbnail: form_widget_gender,
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
