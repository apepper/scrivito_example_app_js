import * as Scrivito from "scrivito";
import formContainerWidgetIcon from "../../assets/images/form_container_widget.svg";
import FormCheckboxWidget from "../FormCheckboxWidget/FormCheckboxWidgetClass";
import FormSubmitButtonWidget from "../FormSubmitButtonWidget/FormSubmitButtonWidgetClass";
import FormTextInputWidget from "../FormTextInputWidget/FormTextInputWidgetClass";

import { random32CharHex } from "./random32CharHex";

Scrivito.provideEditingConfig("FormContainerWidget", {
  title: "Form Container",
  thumbnail: formContainerWidgetIcon,
  attributes: {
    formId: {
      title: "Form ID",
      description: "Autogenerated - please do not modify",
    },
    submittingMessage: {
      title: "Message shown while submitting the form",
    },
    submittedMessage: {
      title: "Message shown after the form was submitted",
    },
  },
  initialContent: {
    formId: () => random32CharHex(),
    submittingMessage: "Submitting...",
    submittedMessage: "Successfully submitted.",
    content: () => [
      new FormTextInputWidget({
        type: "name",
        label: "Name",
        placeholder: "Your name",
        required: false,
      }),
      new FormTextInputWidget({
        type: "email",
        label: "Email",
        placeholder: "Your email",
        required: true,
      }),
      new FormTextInputWidget({
        type: "custom_text_area",
        customFieldName: "message",
        label: "Message",
        placeholder: "Your message",
        required: true,
      }),
      new FormCheckboxWidget(),
      new FormSubmitButtonWidget(),
    ],
  },
  properties: ["formId", "submittingMessage", "submittedMessage"],
  validations: [validateOutsideFormContainer],
});

function validateOutsideFormContainer(widget) {
  return detectFormContainerWidgetAncestor(
    widget,
    "Needs to be outside of a form container.",
    undefined
  );
}

export function validateInsideFormContainer(widget) {
  return detectFormContainerWidgetAncestor(
    widget,
    undefined,
    "Needs to be inside a form container."
  );
}

function detectFormContainerWidgetAncestor(widget, found, notFound) {
  let ancestor = widget.container();
  while (ancestor) {
    if (ancestor.objClass() === "FormContainerWidget") {
      return found;
    }

    ancestor = ancestor.container && ancestor.container();
  }

  return notFound;
}
