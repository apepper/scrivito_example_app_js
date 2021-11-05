import { uniqueId } from "lodash";
import * as React from "react";
import * as Scrivito from "scrivito";
import { booleanIndicatorPrefix } from "../FormContainerWidget/FormContainerWidgetComponent";

import "./CheckboxWidget.scss";

Scrivito.provideComponent("CheckboxWidget", ({ widget }) => {
  const [id] = React.useState(() => uniqueId("checkbox-widget_"));
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="checkbox-widget form-group">
      <input
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

      <label htmlFor={id}>{widget.get("label")}</label>
    </div>
  );
});
