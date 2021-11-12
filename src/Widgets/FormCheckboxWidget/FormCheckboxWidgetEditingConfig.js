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
  validations: [
    validateInsideFormContainer,
    [
      "customFieldName",
      (customFieldName, { widget }) => {
        if (!widget.get("type").startsWith("custom")) {
          return;
        }

        if (customFieldName.length === 0) {
          return "Custom field name needs to be set.";
        }

        if (customFieldName.length > 50) {
          return "Custom field name is too long. Only 50 characters are allowed.";
        }

        if (customFieldName.match(/^[A-Za-z_][A-Za-z0-9_]*$/) === null) {
          return 'Custom field name contains invalid characters: only "a-z", "A-Z", "0-9" and "_".';
        }
      },
    ],
  ],
});
