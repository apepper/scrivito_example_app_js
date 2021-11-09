import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormSubmitButtonWidget", ({ widget }) => (
  <button className="btn btn-primary" type="submit">
    {widget.get("buttonText")}
  </button>
));
