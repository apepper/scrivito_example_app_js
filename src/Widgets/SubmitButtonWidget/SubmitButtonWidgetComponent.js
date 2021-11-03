import * as React from "react";
import * as Scrivito from "scrivito";

import "./SubmitButtonWidget.scss";

Scrivito.provideComponent("SubmitButtonWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="submit-button-widget"
    content={widget}
    attribute="headline"
  />
));
