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

  //pass in event object and prevent default behavior of browser refresh
  //call onSubmit passed down from props and pass to method text from state. call this.setState and pass in object to update component state
  handleOnSubmit() {
    console.log("submitted");
  }

  //pass in event object and call this.setState and pass in an object to update the value of text in component state. write an if statement if this.props.onChange is truthy call this.props.onChange
  handleOnChange() {
    console.log("changed");
  }

  //create a form component with an input, on input element, create onChange property and assign this.handleOnChange, and create a value property set to this.state.text
  render() {
    return (
      <div>
        <h1>MessageInput</h1>
      </div>
    );
  }
}

export default MessageInput;
