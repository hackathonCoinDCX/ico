import React, { useState, Component } from "react";
import { Link , Routes, Route, useNavigate} from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import LoginIn from "../login/LoginIn";
function SignUpIn(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    confPassword:"",
    developer:false,
    wallet:"wallet"
  });
  function onSignupClick() {
    // let input = {[user.confPassword]: confPassword.value };
    // setUser({...user, ...input});
    console.log("signup click");
    if(user.name === "" || user.email === "" || user.mobile === "" || user.password === "" || user.confPassword === ""){
      alert("Please fill all the fields");
    }
    else if(user.mobile.length != 10){
        alert("Please enter a valid mobile number");
    }
    else if(user.password != user.confPassword){
        alert("Password and Confirm Password do not match");
    }
    else if (user.password.length < 3) {
      alert("Password should be atleast 3 characters");
    }
    else{
    console.log("Sign up " + user.name + " " + user.password);
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: user.name,  email: user.email, mobile: user.mobile, developer:0, password: user.password, wallet: user.mobile})
    };
    fetch('http://127.0.0.1:3001/signup', requestOptions)
        .then(response => response.json())
        .then( (data) => {
            // setUser({id: data.id})
            console.log(data);
            if(data.msg === "Successfull"){
                console.log(data.dev_id);
                // this.setState({ dev_id: data.id});
                navigate('/LoginIn');
            }
            else{
                alert("Incorrect Email or Password \nPlease check your login information.");
            }
        });
  }
  function onChange(e){
    console.log(e.target.name, e.target.value);
    let input = {[e.target.name]: e.target.value };
    setUser({...user, ...input});
    console.log("Hello", user);
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
          Already have account? <Link to="/LoginIn">Login</Link>
        </p>
      </Col>
      <Routes>
          <Route path="/LoginIn" element={<LoginIn/>} />
      </Routes>
    </Container>
  );
}
// Add comments
export default SignUpIn;