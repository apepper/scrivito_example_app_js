import * as React from "react";
import * as Scrivito from "scrivito";

import "./TextInputWidget.scss";

Scrivito.provideComponent("TextInputWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="text-input-widget"
    content={widget}
    attribute="headline"
  />
));
