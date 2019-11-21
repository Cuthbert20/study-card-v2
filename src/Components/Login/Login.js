import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "../Register/Register";

function Login() {
  const [username, setUsername] = useState("");
  const [register, setRegister] = useState(false);
  useEffect(() => {
    document.title = `${username}'s Study Cards`;
  });
  const handleChange = (e, key) => {
    setUsername(e.target.value);
  };
  console.log(username);
  function handleRegister() {
    setRegister(!register);
  }
  console.log(register);
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
      {register ? <Register /> : null}
    </div>
  );
}

export default Login;
