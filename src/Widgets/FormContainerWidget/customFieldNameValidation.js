export const customFieldNameValidation = [
  "customFieldName",

  (customFieldName, { widget }) => {
    if (!widget.get("type")?.startsWith("custom")) {
      return;
    }

    if (!customFieldName.startsWith("custom_")) {
      return 'Custom field names must start with "custom_".';
    }

    if (customFieldName.length <= "custom_".length) {
      return "Specify the custom field's name.";
    }

    if (customFieldName.match(/^[A-Za-z_][A-Za-z0-9_]*$/) === null) {
      return 'Custom field names may consist of the following characters: "a-z", "A-Z", "0-9", "_".';
    }

    if (customFieldName.length > 50) {
      return "Custom field names may be up to 50 characters long.";
    }
  },
];
