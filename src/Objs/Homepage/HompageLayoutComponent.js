import * as React from "react";
import * as Scrivito from "scrivito";
import { Homepage } from "./HomepageObjClass";
import { Navigation } from "../../Components/Navigation";

Scrivito.provideLayoutComponent(Homepage, ({ page: _page }) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <Navigation />
      <div>
        Counter: {counter}{" "}
        <button onClick={() => setCounter((s) => s + 1)}>increment</button>
      </div>
      <div id="mainContent">
        <Scrivito.CurrentPage />
      </div>
    </>
  );
});
