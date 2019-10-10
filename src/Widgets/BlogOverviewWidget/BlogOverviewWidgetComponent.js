import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BlogOverviewWidget", () => {
  const [post] = Scrivito.getClass("BlogPost")
    .all()
    .take(1);
  if (!post) {
    return null;
  }
  return <Scrivito.LinkTag to={post}>Click me!</Scrivito.LinkTag>;
});
