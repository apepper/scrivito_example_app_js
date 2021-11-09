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
      <label>
        {widget.get("label")}
        {widget.get("required") ? (
          <span className="text-mandatory" title="Mandatory">
            *
          </span>
        ) : (
          ""
        )}
      </label>
      <br />
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id={femaleId}
          name="gender"
          value="female"
          required={required}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor={femaleId}>
          Female
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id={maleId}
          name="gender"
          value="male"
          required={required}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor={maleId}>
          Male
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id={diversId}
          name="gender"
          required={required}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor={diversId}>
          Custom
        </label>
      </div>
      {showCustom && (
        <input
          className="form-control"
          type="text"
          id={customId}
          name="gender"
          maxLength="50"
          required={required}
        />
      )}
    </div>
  );
});
