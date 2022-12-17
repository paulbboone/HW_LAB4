import React, { useState } from "react";
import FormEx0 from "./components/FormEx0";
import FormEx1 from "./components/FormEx1";
import ShowData from "./components/ShowData";

const onSubmit = (v) => alert("Submit value: " + JSON.stringify(v, null, 2));

export default function App() {
  const [formFields, setFormFields] = useState({});
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState({});
  const [firstForm, setFirstForm] = useState(true);

  return (
    <div className="App">
      <nav>
        <select onChange={(evt) => setFirstForm(evt.target.value === "first")}>
          <option value="first">Single field</option>
          <option value="second">Multiple fields</option>
        </select>
      </nav>
      <main>
        {firstForm ? (
          <FormEx0
            onChange={(ff, v, e) => {
              setFormFields(ff);
              setValid(v);
              setErrors(e);
            }}
            onSubmit={onSubmit}
            initialValue={{
              field1: "My Name is Laam",
            }}
          />
        ) : (
          <FormEx1
            onChange={(ff, v, e) => {
              setFormFields(ff);
              setValid(v);
              setErrors(e);
            }}
            onSubmit={onSubmit}
            initialValue={{
              address1: "AB",
              price: 101,
            }}
          />
        )}

        <ShowData formFields={formFields} errors={errors} valid={valid} />
      </main>
    </div>
  );
}