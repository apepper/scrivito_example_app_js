import * as Scrivito from "scrivito";
import form_widget_button from "../../assets/images/form_widget_button.svg";

Scrivito.provideEditingConfig("SubmitButtonWidget", {
  title: "Submit Button",
  thumbnail: form_widget_button,
  initialContent: {
    buttonText: "send message",
  },
  properties: ["buttonText"],
});
