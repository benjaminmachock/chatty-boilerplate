import React, { Component } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  //pass in the event object and prevent default behavior of a refresh, call this.props.onSubmit and pass in this.state.username
  handleOnSubmit() {
    console.log("submit");
  }

  //pass in the event object, and call this.setState passing in an object that updates the value of username
  handleOnChange() {
    console.log("changed");
  }

  //create a form element with an input and create propertis onChange={this.handleOnChange}. create another input with type of submit
  render() {
    return (
      <div>
        <h1>UserForm</h1>
      </div>
    );
  }
}

export default UserForm;
