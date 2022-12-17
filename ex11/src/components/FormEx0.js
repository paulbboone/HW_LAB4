import React, { useEffect, useState } from "react";
import SimpleForm from "./SimpleForm";
import InputField from "./InputField";

const FormEx0 = ({ onSubmit, onChange, initialValue = {} }) => {
  const [formFields, setFormFields] = useState(initialValue);
  const [valid, setValid] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (onChange) {
      onChange(formFields, valid, errors);
    }
  }, [onChange, formFields, valid, errors]);

  return (
    <div className="TheForm">
      <h1>Single Field</h1>

      <SimpleForm
        value={formFields}
        onChange={setFormFields}
        onValid={(v, errs) => {
          setValid(v);
          setErrors(errs);
        }}
      >
        <InputField
          name="field1"
          onValidate={(v) => (!v || v.length < 3 ? "Too Short!" : null)}
        />
        <button
          onClick={() => onSubmit && onSubmit(formFields)}
          disabled={!valid}
        >
          Submit!
        </button>
      </SimpleForm>
    </div>
  );
};

export default FormEx0;