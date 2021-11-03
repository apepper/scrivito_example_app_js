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
        maxLength="250"
        placeholder={widget.get("placeholder")}
        type={name === "email" ? "email" : "text"}
        required={widget.get("required")}
      />
    </div>
  );
});
