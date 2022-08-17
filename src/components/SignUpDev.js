import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";

function SignUpDev(props) {

	const [user, setUser] = useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    developer:true,
    wallet:""
  });

  function onSignupClick() {
    console.log("signup click");
    if(user.name === "" || user.email === "" || user.mobile === "" || user.password === "" || user.confpassword === ""){
      alert("Please fill all the fields");
    }
    else if(user.mobile.length !== 10){
        alert("Please enter a valid mobile number");
    }
    else if(user.password !== user.confpassword){
        alert("Password and Confirm Password do not match");
    }
    else if (user.password.length < 8) {
      alert("Password should be atleast 8 characters");
    }
    else{
    console.log("Sign up " + user.username + " " + user.password);
    } 
  }

  function onChange(e){
    console.log(e.target.name, e.target.value);
    let input = {[e.target.name]: e.target.value };
    setUser({...user, ...input});
  }

  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200%', width: '200%',}}>
      <Col md="4">
        <h1>Sign up for Developer!</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Name" onChange={onChange}/>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" onChange={onChange}/>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control name="mobile" type="text" placeholder="Enter Mobile Number" onChange={onChange}/>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Enter password" onChange={onChange}/>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicConfPass">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name="confPassword" type="password" placeholder="Re-enter password" onChange={onChange}/>
          </Form.Group>
        </Form>
        <br />
        <Button
          color="primary"
          onClick={onSignupClick}  
        >Sign up</Button>
        <p className="mt-2">
          Already have account? <Link to="/LoginDev">Login</Link>
        </p>
      </Col>
    </Container>
  );
}

// Add comments
export default SignUpDev;