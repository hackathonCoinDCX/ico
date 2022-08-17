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

class LoginDev extends Component {
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

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Login " + userData.username + " " + userData.password);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Welcome Developer!</h1>

            <Form>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.onChange}/>
              </Form.Group>
              <br />
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="" onChange={this.onChange}/>
              </Form.Group>
              <br />
              
            </Form>

            <Button color="primary" onClick={this.onLoginClick}>Login</Button>
            <p className="mt-2">
              Don't have account? <Link to="/SignUpDev">Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default LoginDev;
