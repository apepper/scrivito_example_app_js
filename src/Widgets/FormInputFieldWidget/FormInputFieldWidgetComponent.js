import * as React from "react";
import * as Scrivito from "scrivito";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import { getFieldName } from "../FormContainerWidget/utils/getFieldName";
import { isCustomType } from "../FormContainerWidget/utils/isCustomType";

Scrivito.provideComponent("FormInputFieldWidget", ({ widget }) => {
  const id = `form_text_input_widget_${widget.id()}`;
  const questionMarkId = `${id}_question_mark`;
  const mandatoryId = `${id}_mandatory`;

  const fieldName = getFieldName(widget);
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
          <span className="text-mandatory help-cursor" id={mandatoryId}>
            *
          </span>
          <UncontrolledPopover
            placement="bottom"
            target={mandatoryId}
            trigger="legacy"
          >
            <PopoverBody>mandatory</PopoverBody>
          </UncontrolledPopover>
        </>
      ) : null}

      {widget.get("helpText") ? (
        <>
          <i
            className="fa fa-question-circle-o fa-1x ml-1 help-cursor"
            id={questionMarkId}
          ></i>
          <UncontrolledPopover
            placement="bottom"
            target={questionMarkId}
            trigger="legacy"
          >
            <PopoverBody>
              <Scrivito.InPlaceEditingOff>
                <Scrivito.ContentTag content={widget} attribute="helpText" />
              </Scrivito.InPlaceEditingOff>
            </PopoverBody>
          </UncontrolledPopover>
        </>
      ) : null}

      {isCustomType(widget) && widget.get("customType") === "multi_line" ? (
        <textarea
          className="form-control"
          id={id}
          rows="3"
          name={fieldName}
          placeholder={widget.get("placeholder")}
          required={widget.get("required")}
        />
      ) : (
        <input
          className="form-control"
          id={id}
          name={fieldName}
          maxLength={calculateMaxLength(fieldName)}
          placeholder={widget.get("placeholder")}
          type={calculateType(fieldName)}
          required={widget.get("required")}
        />
      )}
    </div>
  );
});

function calculateMaxLength(fieldName) {
  switch (fieldName) {
    case "phone_number":
      return "50";
    case "email":
      return "120";
    default:
      return "250";
  }
}

function calculateType(type) {
  if (type === "email") {
    return "email";
  }

  if (type === "phone_number") {
    return "tel";
  }

  return "text";
}
