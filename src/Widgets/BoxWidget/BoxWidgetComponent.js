import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BoxWidget", ({ widget }) => {
  const classNames = ["card"];
  if (widget.get("boxStyle") !== "white") classNames.push("card-theme");
  if (widget.get("useOffset")) classNames.push("box-offset");
  const link = widget.get("link");
  if (link) {
    return (
      <Scrivito.LinkTag to={link}>
        <div className={classNames.join(" ")}>
          <Scrivito.ContentTag
            content={widget}
            attribute="body"
            className="card-body"
          />
        </div>
      </Scrivito.LinkTag>
    );
  }

  return (
    <Scrivito.WidgetTag className={classNames.join(" ")}>
      <Scrivito.ContentTag
        content={widget}
        attribute="body"
        className="card-body"
      />
    </Scrivito.WidgetTag>
  );
});
