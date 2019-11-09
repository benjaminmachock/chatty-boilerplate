import React, { Component } from "react";

class App extends Component {
  //constructor for a React component is called before it is mounted. React constructors are used for 2 purposes. initializing local state by assigning an object to this.state. Binding event handler methods to an instance. do not call setState in the constructor. dont copy props into state
  constructor() {
    super();
    this.state = {
      currentUsername: "",
      viewPage: "EnterUsername"
    };
    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
  }

  handleUsernameSubmit() {
    console.log("submitted");
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
