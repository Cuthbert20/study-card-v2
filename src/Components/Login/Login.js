import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "../Register/Register";

function Login() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    document.title = `${username}'s Study Cards`;
  });
  const handleChange = (e, key) => {
    setUsername(e.target.value);
  };
  console.log(username);
  function handleRegister() {
    console.log("hit");
  }
  return (
    <div>
      <h1>Login Component</h1>
      <input
        placeholder="username"
        onChange={e => handleChange(e)}
        type="text"
        value={username}
      />
      <input type="text" placeholder="password" />
      <button>Submit</button>
      <button onClick={() => handleRegister()}>Register</button>
      {/* conditionally rendering the Register Component */}
    </div>
  );
}

export default Login;
