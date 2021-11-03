import * as React from "react";
import * as Scrivito from "scrivito";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => (
  <form className="form-container-widget" method="post">
    <Scrivito.ContentTag content={widget} attribute="content" />
  </form>
));
