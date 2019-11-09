import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUsername: "",
      viewPage: "EnterUsername"
    };
    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Chatty</h1>
      </div>
    );
  }
}

export default App;
