import * as React from "react";
import * as Scrivito from "scrivito";

import { random32CharHex } from "./random32CharHex";
import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => {
  const [submission, setSubmission] = React.useState("not submitted");

  if (submission === "submitting") {
    return <div className="form-container-widget">🛰️ Submitting...</div>;
  }

  if (submission === "success") {
    return (
      <div className="form-container-widget">🗳️ Successfully submitted.</div>
    );
  }

  return (
    <div className="form-container-widget">
      <form method="post" onSubmit={onSubmit}>
        <input type="hidden" name="form_id" value={widget.get("formId")} />
        <Scrivito.ContentTag content={widget} attribute="content" />
      </form>
    </div>
  );

  async function onSubmit(element) {
    element.preventDefault();

    setSubmission("submitting");
    await submit(extractFormData(element.target));
    setSubmission("success");
  }
});

export function booleanIndicatorPrefix() {
  return "2️⃣";
}

function extractFormData(formElement) {
  // TODO: If IE11 support is needed, something like https://www.npmjs.com/package/formdata-polyfill should be used
  const formData = new FormData(formElement);
  const entries = Object.fromEntries(formData);
  const booleanKeys = Object.keys(entries).filter((key) =>
    key.startsWith(booleanIndicatorPrefix())
  );
  booleanKeys.forEach((booleanKey) => {
    const booleanValue = entries[booleanKey] === "true";
    delete entries[booleanKey];
    const newKey = booleanKey.substring(booleanIndicatorPrefix().length);
    entries[newKey] = booleanValue;
  });

  return entries;
}

async function submit(formProps) {
  // TODO: Implement actual submission
  const id = random32CharHex();
  console.log("submitting", id, formProps);
  return new Promise((resolve) => setTimeout(resolve, 3000));
}
