import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";

const axios = require('axios');

export async function getStatus() {

    try{
        const response = await axios.get('/signup');
        console.log('response', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}

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
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password,
      confpassword: this.state.confPassword
    };
    if(userData.name === "" || userData.email === "" || userData.mobile === "" || userData.password === "" || userData.confpassword === ""){
        alert("Please fill all the fields");
    }
    else if(userData.mobile.length !== 10){
        alert("Please enter a valid mobile number");
    }
    else if(userData.password !== userData.confpassword){
        alert("Password and Confirm Password do not match");
    }
    else if (userData.password.length < 8) {
      alert("Password should be atleast 8 characters");
    }
    else{
    console.log("Sign up " + userData.username + " " + userData.password);
    }

    console.log(getStatus());                   //Api Call

  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Sign up for Developer!</h1>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="userName" type="text" placeholder="Enter Name" onChange={this.onChange}/>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.onChange}/>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control name="mobile" type="text" placeholder="Enter Mobile Number" onChange={this.onChange}/>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Enter password" onChange={this.onChange}/>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicConfPass">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="confPassword" type="password" placeholder="Re-enter password" onChange={this.onChange}/>
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