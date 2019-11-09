import React, { Component } from "react";
import Chatkit from "@pusher/chatkit-client";
import { Container, Jumbotron } from "reactstrap";

class Chat extends Component {
  constructor(props) {
    //super refers to the parent class constructor. you can not use this in a constructor until after you've called the parent constructor. passing props to super so the base React component constructor can intialize props. React also assigns props on the instance right after calling your constructor
    super(props);
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: []
    };
    this.sendUserMessage = this.sendUserMessage.bind(this);
  }
  //Lifecycle Method is invoked immediately after a component is mounted. you can call setState() in componentDidMount(). triggers an extra rendering, but it will happen before the browser updates the screen. render is called twice but happens before the browser updates the screen. so the user wont see the intermediate state
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
          //hooks are essentially an event listener.  view documentation for Chat Kit to find out what is available
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

  //pass in the text created by the user, sendMessage is a method from Chat Kit
  sendUserMessage(text) {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id
    });
  }

  //nest the MessagesList and MessageInput component. pass props messages={} and onSubmit={}
  render() {
    return (
      <div>
        <h1>Chat</h1>
      </div>
    );
  }
}

export default Chat;
