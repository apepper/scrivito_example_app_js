import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("Blog", ({ page }) => (
  <Scrivito.ContentTag className="div" content={page} attribute="body" />
));
