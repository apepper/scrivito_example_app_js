import * as React from "react";
import * as Scrivito from "scrivito";

import "./SubmitButtonWidget.scss";

Scrivito.provideComponent("SubmitButtonWidget", ({ widget }) => (
  <button className="btn btn-primary" type="submit">
    {widget.get("buttonText")}
  </button>
));
