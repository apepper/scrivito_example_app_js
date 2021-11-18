import * as React from "react";
import * as Scrivito from "scrivito";
import { customFieldIndicator } from "../FormContainerWidget/FormContainerWidgetComponent";

Scrivito.provideComponent("FormTextInputWidget", ({ widget }) => {
  const id = `FormTextInputWidget_${widget.id()}`;
  const name = widget.get("type");

  return (
    <div className="form-group">
      <label htmlFor={id}>
        {widget.get("label")}
        {widget.get("required") ? (
          <span className="text-mandatory" title="Mandatory">
            *
          </span>
        ) : (
          ""
        )}
      </label>

      {name === "custom_text_area" ? (
        <textarea
          className="form-control"
          rows="3"
          id={id}
          name={`${customFieldIndicator()}${widget.get("customFieldName")}`}
          placeholder={widget.get("placeholder")}
          required={widget.get("required")}
        />
      ) : (
        <input
          className="form-control"
          id={id}
          name={
            name?.startsWith("custom_")
              ? `${customFieldIndicator()}${widget.get("customFieldName")}`
              : name
          }
          maxLength={calculateMaxLength(name)}
          placeholder={widget.get("placeholder")}
          type={calculateType(name)}
          required={widget.get("required")}
        />
      )}
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
