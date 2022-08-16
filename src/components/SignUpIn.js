import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class SignUpIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Sign up " + userData.username + " " + userData.password);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Sign up for Investor!</h1>
            <Form>

              <Form.Group controlId="usernameId">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="uname"
                  placeholder="Enter your name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>

              </Form.Group>
              <Form.Group controlId="useremailId">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="uEmail"
                  placeholder="Enter your email"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="mobileno">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  type="number"
                  name="umobile"
                  placeholder="Enter your mobile no"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </Form.Group>

            </Form>
            <Button 
              color="primary"
              onClick={this.onSignupClick}  
            >Sign up</Button>
            <p className="mt-2">
              Already have account? <Link to="/LoginIn">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUpIn;