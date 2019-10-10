import * as React from "react";
import * as Scrivito from "scrivito";
import ErrorBoundary from "./Components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <div>
        <div className="content-wrapper">
          <Scrivito.CurrentPage />
        </div>
      </div>
    </ErrorBoundary>
  );
}
