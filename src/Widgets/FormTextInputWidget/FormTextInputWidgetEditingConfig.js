import * as Scrivito from "scrivito";
import formTextInputWidgetIcon from "../../assets/images/form_text_input_widget.svg";
import { validateInsideFormContainer } from "../FormContainerWidget/FormContainerWidgetEditingConfig";

Scrivito.provideEditingConfig("FormTextInputWidget", {
  title: "Form: Text Input",
  thumbnail: formTextInputWidgetIcon,
  attributes: {
    required: {
      title: "Mandatory",
    },
    type: {
      title: "Input Type",
      values: [
        { value: "email", title: "Email" },
        { value: "name", title: "Name" },
        { value: "given_name", title: "Given name" },
        { value: "family_name", title: "Family name" },
        { value: "middle_name", title: "Middle name" },
        { value: "company", title: "Company" },
        { value: "phone_number", title: "Telephone number" },
        { value: "custom_input", title: "Custom single-line" },
        { value: "custom_text_area", title: "Custom multi-line" },
      ],
    },
    customFieldName: {
      title: "Custom field name",
    },
  },
  initialContent: {
    label: "Email address",
    placeholder: "Email",
    type: "email",
  },
  properties: (widget) => {
    const otherProps = ["label", "placeholder", "required"];

    if (widget.get("type")?.startsWith("custom_")) {
      return ["type", "customFieldName", ...otherProps];
    }
    return ["type", ...otherProps];
  },
  validations: [
    validateInsideFormContainer,
    [
      "customFieldName",
      (customFieldName, { widget }) => {
        if (!widget.get("type")?.startsWith("custom")) {
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
