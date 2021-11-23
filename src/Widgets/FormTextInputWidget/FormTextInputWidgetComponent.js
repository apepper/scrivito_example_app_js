import * as React from "react";
import * as Scrivito from "scrivito";
import { Popover, PopoverBody } from "reactstrap";
import { customFieldIndicator } from "../FormContainerWidget/FormContainerWidgetComponent";

Scrivito.provideComponent("FormTextInputWidget", ({ widget }) => {
  const id = `FormTextInputWidget_${widget.id()}`;
  const questionId = `${id}_question`;
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const name = widget.get("type");
  const labelOptions = {};
  if (!Scrivito.isInPlaceEditingActive()) {
    labelOptions.htmlFor = id;
  }

  return (
    <div className="form-group">
      <Scrivito.ContentTag
        content={widget}
        attribute="label"
        tag="label"
        {...labelOptions}
      />
      {widget.get("required") ? (
        <>
          <span className="text-mandatory" title="Mandatory">
            *
          </span>
        </>
      ) : (
        ""
      )}

      {widget.get("description") ? (
        <>
          <i className="fa fa-question-circle fa-1x ml-2" id={questionId}></i>
          <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target={questionId}
            toggle={() => setPopoverOpen(!popoverOpen)}
          >
            <PopoverBody>
              <Scrivito.InPlaceEditingOff>
                <Scrivito.ContentTag content={widget} attribute="description" />
              </Scrivito.InPlaceEditingOff>
            </PopoverBody>
          </Popover>
        </>
      ) : null}

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
