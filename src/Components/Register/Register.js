import React, { useState } from "react";

export default function Register() {
  const [login, setLogin] = useState(false);
  function handleLogin() {
    setLogin(!login);
  }
  return (
    <div>
      <h1>Register Component</h1>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
}
