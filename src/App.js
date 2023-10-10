import React, { useState } from "react";
import "./App.css";
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minNumbers: 2,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Stron Password");
      setMessageColor("green");
    } else {
      setErrorMessage("Is Not Stron Password");
      setMessageColor("red");
    }
  };

  return (
    <div className="container">
      <pre className="password">
        <h2>Password Validator</h2>
        <span>Enter Password:</span>
        <input type="text" onChange={(e) => validate(e.target.value)} />
        <p className="message" style={{ color: messageColor }}>
          {" "}
          {errorMessage === "" ? null : <span>{errorMessage}</span>}
        </p>
      </pre>
    </div>
  );
};

export default App;
