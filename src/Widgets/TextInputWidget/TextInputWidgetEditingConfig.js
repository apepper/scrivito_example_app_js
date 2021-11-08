import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("TextInputWidget", {
  title: "Text Input",
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

    if (widget.get("type") === "custom_text_area") {
      return ["type", "customFieldName", ...otherProps];
    }
    return ["type", ...otherProps];
  },
});
