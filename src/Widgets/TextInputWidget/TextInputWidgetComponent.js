import * as React from "react";
import * as Scrivito from "scrivito";

import "./TextInputWidget.scss";

Scrivito.provideComponent("TextInputWidget", ({ widget }) => (
  <div className="text-input-widget form-group">
    <label htmlFor="contactName">{widget.get("label")}</label>

    <input
      id="contactName"
      name="contactName"
      placeholder={widget.get("placeholder")}
      type="text"
      required
    />
  </div>
));
