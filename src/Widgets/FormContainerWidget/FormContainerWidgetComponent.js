import * as React from "react";
import * as Scrivito from "scrivito";
import { toHex } from "@aws-sdk/util-hex-encoding";

import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => {
  const [formId] = React.useState(() => random32Hex());

  return (
    <form className="form-container-widget" method="post">
      <input type="hidden" name="id" value={formId} />
      <Scrivito.ContentTag content={widget} attribute="content" />
    </form>
  );
});

function random32Hex() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return toHex(array);
}
