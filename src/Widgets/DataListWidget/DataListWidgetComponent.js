import * as React from "react";
import * as Scrivito from "scrivito";
import { DataListWidget } from "./DataListWidgetClass";

Scrivito.provideComponent(DataListWidget, ({ widget }) => {
  const data = widget.get("data");
  const dataScope = Scrivito.useDataLocator(data);

  return (
    <>
      <div className="row row-cols-1">
        {dataScope.take().map((dataItem) => (
          <Scrivito.ContentTag
            content={widget}
            attribute="content"
            className="col"
            dataContext={dataItem}
            key={dataItem.id()}
          />
        ))}
      </div>
    </>
  );
});
