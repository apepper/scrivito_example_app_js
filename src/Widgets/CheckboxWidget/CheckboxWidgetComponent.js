import * as React from "react";
import * as Scrivito from "scrivito";

import "./CheckboxWidget.scss";

Scrivito.provideComponent("CheckboxWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="checkbox-widget"
    content={widget}
    attribute="headline"
  />
));
