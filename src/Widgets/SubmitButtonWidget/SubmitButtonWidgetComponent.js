import * as React from "react";
import * as Scrivito from "scrivito";

import "./SubmitButtonWidget.scss";

Scrivito.provideComponent("SubmitButtonWidget", ({ widget }) => (
  <button className="submit-button-widget" type="submit">
    {widget.get("buttonText")}
  </button>
));
