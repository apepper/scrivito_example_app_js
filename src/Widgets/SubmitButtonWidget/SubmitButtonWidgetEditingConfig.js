import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("SubmitButtonWidget", {
  title: "Submit Button",
  initialContent: {
    buttonText: "send message",
  },
  properties: ["buttonText"],
});
