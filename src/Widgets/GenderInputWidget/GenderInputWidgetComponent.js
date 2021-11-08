import { uniqueId } from "lodash-es";
import * as React from "react";
import * as Scrivito from "scrivito";

import "./GenderInputWidget.scss";

Scrivito.provideComponent("GenderInputWidget", ({ widget }) => {
  const required = widget.get("required");
  const [showCustom, setShowCustom] = React.useState(false);
  const [femaleId] = React.useState(() =>
    uniqueId("gender-input-widget_gender-f_")
  );
  const [maleId] = React.useState(() =>
    uniqueId("gender-input-widget_gender-m_")
  );
  const [diversId] = React.useState(() =>
    uniqueId("gender-input-widget_gender-d_")
  );
  const [customId] = React.useState(() =>
    uniqueId("gender-input-widget_gender-c_")
  );

  const onChange = (event) => setShowCustom(event.target.id === diversId);

  return (
    <div className="gender-input-widget form-group">
      <span>
        {widget.get("label")}
        {widget.get("required") ? <span title="Mandatory">*</span> : ""}
      </span>

      <span>
        <label htmlFor={femaleId}>Female</label>
        <input
          type="radio"
          id={femaleId}
          name="gender"
          value="female"
          required={required}
          onChange={onChange}
        />
      </span>

      <span>
        <label htmlFor={maleId}>Male</label>
        <input
          type="radio"
          id={maleId}
          name="gender"
          value="male"
          required={required}
          onChange={onChange}
        />
      </span>

      <span>
        <label htmlFor={diversId}>Custom</label>
        <input
          type="radio"
          id={diversId}
          name="gender"
          required={required}
          onChange={onChange}
        />
      </span>

      {showCustom && (
        <div>
          <label htmlFor={customId}>Custom</label>
          <input
            type="text"
            id={customId}
            name="gender"
            maxLength="50"
            required={required}
          />
        </div>
      )}
    </div>
  );
});
