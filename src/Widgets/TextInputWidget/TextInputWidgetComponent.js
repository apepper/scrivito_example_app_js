import { uniqueId } from "lodash-es";
import * as React from "react";
import * as Scrivito from "scrivito";

import "./TextInputWidget.scss";

Scrivito.provideComponent("TextInputWidget", ({ widget }) => {
  const [id] = React.useState(() => uniqueId("text-input-widget_"));
  const name = widget.get("type");

  return (
    <div className="text-input-widget form-group">
      <label htmlFor={id}>{widget.get("label")}</label>

      <input
        id={id}
        name={name}
        maxLength={calculateMaxLength(name)}
        placeholder={widget.get("placeholder")}
        type={calculateType(name)}
        required={widget.get("required")}
      />
    </div>
  );
});

function calculateMaxLength(fieldName) {
  return fieldName === "phone_number" ? "50" : "250";
}

function calculateType(fieldName) {
  if (fieldName === "email") {
    return "email";
  }

  if (fieldName === "phone_number") {
    return "tel";
  }

  return "text";
}
