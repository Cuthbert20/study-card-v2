import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("Spencer");
  const handleChange = (e, key) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <h1>Login Component</h1>
      <input
        onChange={e => handleChange(e, "username")}
        type="text"
        value={username}
      />
    </div>
  );
}

export default Login;
