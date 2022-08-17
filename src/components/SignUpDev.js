import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";

class SignUpDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.username);
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
            <h1>Sign up for Developer!</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="userName" type="text" placeholder="Enter Name" onChange={this.onChange}/>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.onChange}/>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control name="mobile" type="text" placeholder="Enter Mobile Number" onChange={this.onChange}/>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="password" type="password" placeholder="" onChange={this.onChange}/>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="confPassword" type="password" placeholder="" onChange={this.onChange}/>
              </Form.Group>
            </Form>
            <br />
            <Button 
              color="primary"
              onClick={this.onSignupClick}  
            >Sign up</Button>
            <p className="mt-2">
              Already have account? <Link to="/LoginDev">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}


// Add comments
export default SignUpDev;