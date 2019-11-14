import React, { Component } from "react";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      user: "Spencer"
    };
  }
  render() {
    return (
      <div>
        <h1>Landing Component</h1>
        <h3>My Name is {this.state.user}</h3>
      </div>
    );
  }
}

export default Landing;
