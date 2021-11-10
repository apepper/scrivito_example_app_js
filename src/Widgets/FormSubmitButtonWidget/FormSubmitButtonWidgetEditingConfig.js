import * as Scrivito from "scrivito";
import formSubmitButtonWidgetIcon from "../../assets/images/form_submit_button_widget.svg";
import { validateInsideFormContainer } from "../FormContainerWidget/FormContainerWidgetEditingConfig";

Scrivito.provideEditingConfig("FormSubmitButtonWidget", {
  title: "Form: Submit Button",
  thumbnail: formSubmitButtonWidgetIcon,
  initialContent: {
    buttonText: "send message",
  },
  properties: ["buttonText"],
  validations: [validateInsideFormContainer],
});
