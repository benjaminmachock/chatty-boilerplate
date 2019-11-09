import React, { Component } from "react";

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  render() {
    return (
      <div>
        <h1>MessageInput</h1>
      </div>
    );
  }
}

export default MessageInput;
