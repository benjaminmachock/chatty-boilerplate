import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSubmit() {
    console.log("submitted");
  }

  handleOnChange() {
    console.log("changed");
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
