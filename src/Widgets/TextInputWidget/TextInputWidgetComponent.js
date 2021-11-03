import { uniqueId } from "lodash-es";
import * as React from "react";
import * as Scrivito from "scrivito";

import "./TextInputWidget.scss";

Scrivito.provideComponent("TextInputWidget", ({ widget }) => {
  const [id] = React.useState(() => uniqueId("text-input-widget_"));

  return (
    <div className="text-input-widget form-group">
      <label htmlFor={id}>{widget.get("label")}</label>

      <input
        id={id}
        name="contactName"
        placeholder={widget.get("placeholder")}
        type="text"
        required
      />
    </div>
  );
});
