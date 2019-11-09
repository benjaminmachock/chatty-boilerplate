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

  handleUsernameSubmit(username) {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(res => {
        this.setState({
          currentUsername: username,
          viewPage: "Chat"
        });
      })
      .catch(error => console.error("error", error));
  }

  //create 2 ifs that check viewPage state to determine what page will be displayed to user.  the 2 nested components are UserForm and Chat. pass onSubmit property to UserForm with the handleUserNameSubmit function. pass currentUsername property the state value of currentUsername
  render() {
    return (
      <div>
        <h1>Chatty</h1>
      </div>
    );
  }
}

export default App;
