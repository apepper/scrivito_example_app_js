import * as React from "react";
import * as Scrivito from "scrivito";

import { random32CharHex } from "./random32CharHex";
import "./FormContainerWidget.scss";

Scrivito.provideComponent("FormContainerWidget", ({ widget }) => {
  const [submission, setSubmission] = React.useState("not submitted");

  if (submission === "submitting") {
    return <div className="form-container-widget text-center"><i class="fa fa-spin fa-spinner fa-2x" aria-hidden="true"></i><span class="text-super"> Submitting...</span></div>;
  }

  if (submission === "success") {
    return (
      <div className="form-container-widget text-center"><i class="fa fa-check fa-2x" aria-hidden="true"></i><span class="text-super"> Successfully submitted.</span></div>
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

export function customFieldIndicator() {
  return "🏷️";
}

function extractFormData(formElement) {
  // TODO: If IE11 support is needed, something like https://www.npmjs.com/package/formdata-polyfill should be used
  const formData = new FormData(formElement);
  const entries = Object.fromEntries(formData);

  // process boolean
  const booleanKeys = Object.keys(entries).filter((key) =>
    key.startsWith(booleanIndicatorPrefix())
  );
  booleanKeys.forEach((booleanKey) => {
    const booleanValue = entries[booleanKey] === "true";
    delete entries[booleanKey];
    const newKey = booleanKey.substring(booleanIndicatorPrefix().length);
    entries[newKey] = booleanValue;
  });

  // process custom fields
  const customKeys = Object.keys(entries).filter((key) =>
    key.startsWith(customFieldIndicator())
  );
  const customFields = {};
  customKeys.forEach((customKey) => {
    const customValue = entries[customKey];
    delete entries[customKey];
    const newKey = customKey.substring(booleanIndicatorPrefix().length);
    customFields[newKey] = customValue;
  });
  entries.custom_fields = customFields;

  return entries;
}

async function submit(formProps) {
  // TODO: Implement actual submission
  const id = random32CharHex();
  console.log("submitting", id, formProps);
  return new Promise((resolve) => setTimeout(resolve, 3000));
}
