import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";

function LoginDev(props) {

	const [user, setUser] = useState({
    email:"",
    password:"",
  });

  function onLoginClick() {
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
    <Container>
      <Row>
        <Col md="4">
          <h1>Welcome Developer!</h1>
           <Form>
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" onChange={onChange}/>
           </Form.Group>
           <br />
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="" onChange={onChange}/>
           </Form.Group>
             <br />
            
           </Form>

           <Button color="primary" onClick={onLoginClick}>Login</Button>
           <p className="mt-2">
            Don't have account? <Link to="/SignUpDev">Signup</Link>
          </p>
         </Col>
       </Row>
     </Container>
  );
}

export default LoginDev;
