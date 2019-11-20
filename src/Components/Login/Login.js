import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    document.title = `${username}'s Study Card App`;
  });
  const handleChange = (e, key) => {
    setUsername(e.target.value);
  };
  console.log(username);
  return (
    <div>
      <h1>Login Component</h1>
      <input onChange={e => handleChange(e)} type="text" value={username} />
    </div>
  );
}

export default Login;
