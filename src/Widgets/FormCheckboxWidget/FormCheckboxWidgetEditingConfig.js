import * as Scrivito from "scrivito";
import formCheckboxWidgetIcon from "../../assets/images/form_checkbox_widget.svg";
import { isCustomType } from "../FormContainerWidget/utils/isCustomType";
import { customFieldNameValidation } from "../FormContainerWidget/utils/validations/customFieldNameValidation";
import { insideFormContainerValidation } from "../FormContainerWidget/utils/validations/insideFormContainerValidation";
import { typeValidation } from "../FormContainerWidget/utils/validations/typeValidation";

Scrivito.provideEditingConfig("FormCheckboxWidget", {
  title: "Form Checkbox",
  thumbnail: formCheckboxWidgetIcon,
  attributes: {
    required: { title: "Mandatory" },
    type: {
      title: "Input type",
      values: [
        { value: "custom", title: "Custom" },
        { value: "accept_terms", title: "Accept terms" },
      ],
    },
    customFieldName: { title: "Custom field name" },
    helpText: { title: "Help text" },
  },
  properties: (widget) => [
    "type",
    ["customFieldName", { enabled: isCustomType(widget) }],
    "label",
    "required",
    "helpText",
  ],
  initialContent: {
    type: "custom",
    customFieldName: "custom_field_name",
    label: "Please send me your free printed product catalog.",
  },
  validations: [
    typeValidation,
    customFieldNameValidation,
    insideFormContainerValidation,
  ],
});
