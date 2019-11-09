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
  render() {
    return (
      <div>
        <h1>UserForm</h1>
      </div>
    );
  }
}

export default UserForm;
