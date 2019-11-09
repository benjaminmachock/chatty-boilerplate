import React, { Component } from "react";

class Chat extends Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "",
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: "http://localhost:3001/authenticate"
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
        return currentUser.subscribeToRoom({
          roomId: "",
          messageLimit: 6,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            },
            onUserJoined: () => this.forceUpdate()
          }
        });
      })
      .then(currentRoom => {
        this.setState({ currentRoom });
      })
      .catch(error => console.error("error", error));
  }
  render() {
    return (
      <div>
        <h1>Chat</h1>
      </div>
    );
  }
}

export default Chat;
