import * as Scrivito from "scrivito";
import form_widget_container from "../../assets/images/form_widget_container.svg";

import { random32CharHex } from "./random32CharHex";

Scrivito.provideEditingConfig("FormContainerWidget", {
  title: "Form Container",
  thumbnail: form_widget_container,
  attributes: {
    formId: {
      title: "Form ID",
      description: "Autogenerated - please do not modify",
    },
  },
  initialContent: {
    formId: () => random32CharHex(),
  },
  properties: ["formId"],
});
