import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormGenderInputWidget", ({ widget }) => {
  const required = widget.get("required");
  const [showCustom, setShowCustom] = React.useState(false);
  const femaleId = `FormGenderInputWidget_${widget.id}_f`;
  const maleId = `FormGenderInputWidget_${widget.id}_m`;
  const diversId = `FormGenderInputWidget_${widget.id}_d`;
  const customId = `FormGenderInputWidget_${widget.id}_c`;

  const onChange = (event) => setShowCustom(event.target.id === diversId);

  return (
    <div className="form-group">
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
          value="custom"
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
