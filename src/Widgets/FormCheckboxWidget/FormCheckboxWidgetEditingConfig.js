import * as Scrivito from "scrivito";
import formCheckboxWidgetIcon from "../../assets/images/form_checkbox_widget.svg";
import { validateInsideFormContainer } from "../FormContainerWidget/FormContainerWidgetEditingConfig";

Scrivito.provideEditingConfig("FormCheckboxWidget", {
  title: "Form: Checkbox",
  thumbnail: formCheckboxWidgetIcon,
  attributes: {
    type: {
      title: "Input Type",
      values: [
        { value: "accept_terms", title: "Accept terms" },
        { value: "custom", title: "Custom" },
      ],
    },
    customFieldName: {
      title: "Custom field name",
    },
    required: {
      title: "Mandatory",
    },
  },
  properties: (widget) => {
    const otherProps = ["label", "required"];

    if (widget.get("type") === "custom") {
      return ["type", "customFieldName", ...otherProps];
    }
    return ["type", ...otherProps];
  },
  initialContent: {
    type: "accept_terms",
    required: true,
    label: "I agree to the terms and conditions",
  },
  validations: [validateInsideFormContainer],
});
