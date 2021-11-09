import { uniqueId } from "lodash";
import * as React from "react";
import * as Scrivito from "scrivito";
import { booleanIndicatorPrefix } from "../FormContainerWidget/FormContainerWidgetComponent";

Scrivito.provideComponent("FormCheckboxWidget", ({ widget }) => {
  const [id] = React.useState(() => uniqueId("checkbox-widget_"));
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="checkbox-widget form-check form-check-inline mb-2">
      <input
        className="form-check-input"
        id={id}
        type="checkbox"
        value={true}
        onChange={(event) => setChecked(event.target.checked)}
        required={widget.get("required")}
      />
      <input
        type="hidden"
        name={`${booleanIndicatorPrefix()}accept_terms`}
        value={checked}
      />

      <label className="form-check-label ml-3" htmlFor={id}>
        {widget.get("label")}{" "}
        {widget.get("required") ? (
          <span className="text-mandatory" title="Mandatory">
            *
          </span>
        ) : (
          ""
        )}
      </label>
    </div>
  );
});
