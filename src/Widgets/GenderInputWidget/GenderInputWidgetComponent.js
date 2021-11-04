import * as React from "react";
import * as Scrivito from "scrivito";

import "./GenderInputWidget.scss";

Scrivito.provideComponent("GenderInputWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="gender-input-widget"
    content={widget}
    attribute="headline"
  />
));
