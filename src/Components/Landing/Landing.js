import React, { useState } from "react";

function Landing() {
  const [user, setUser] = useState("Spencer");
  return (
    <div>
      <h1>Landing Component</h1>
      <h3>Hey My Name is {user} thanks for coming</h3>
    </div>
  );
}

export default Landing;
