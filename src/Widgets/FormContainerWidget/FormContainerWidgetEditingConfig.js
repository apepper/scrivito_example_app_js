import * as Scrivito from "scrivito";
import formContainerWidgetIcon from "../../assets/images/form_container_widget.svg";
import FormSubmitButtonWidget from "../FormSubmitButtonWidget/FormSubmitButtonWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";
import { pseudoRandom32CharHex } from "./pseudoRandom32CharHex";

Scrivito.provideEditingConfig("FormContainerWidget", {
  title: "Form Container",
  thumbnail: formContainerWidgetIcon,
  attributes: {
    formId: {
      title: "Form ID",
      description: "Autogenerated - modify with care",
    },
    submittingMessage: {
      title: "Message shown while the form is being submitted",
    },
    submittedMessage: {
      title: "Message shown after the form was submitted",
    },
  },
  properties: ["submittingMessage", "submittedMessage"],
  propertiesGroups: [
    {
      title: "System",
      key: "FormContainerWidgetSystem",
      properties: ["formId"],
    },
  ],
  initialContent: {
    formId: () => pseudoRandom32CharHex(),
    submittingMessage: "Submitting...",
    submittedMessage:
      "Your message has been successfully sent. Thank you for your request. We will get back to you as soon as possible.",
    content: () => [
      new TextWidget({
        text: "<p>By submitting you agree to the terms and conditions of our privacy policy.</p>",
      }),
      new FormSubmitButtonWidget(),
    ],
  },
});
