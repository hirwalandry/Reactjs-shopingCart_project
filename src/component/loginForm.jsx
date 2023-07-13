import React, { useState } from "react";
import { ModalDismissAsyncButton } from "./modal";

const makeFakeRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 10;
      random <= 5 ? resolve("success") : reject("error");
    }, 1000);
  });
};

function LoginForm() {
  const [error, setError] = useState();

  function onSubmit() {
    return makeFakeRequest().then(
      (response) => response,
      (error) => {
        setError(error);
      }
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>username</label>
      <input type="text" />
      <label>password</label>
      <input type="password" />
      <p style={{ color: "red" }}>{error}</p>
      <ModalDismissAsyncButton>
        <button onClick={onSubmit}>submit</button>
      </ModalDismissAsyncButton>
    </div>
  );
}

export default LoginForm;
