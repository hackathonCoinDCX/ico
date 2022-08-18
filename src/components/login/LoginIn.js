import React, { useState, Component } from "react";
import { Link , Routes, Route, useNavigate} from "react-router-dom";
import InvDashboard from "../investor/InvDashboard";
import { Container, Button, Row, Col, Form } from "react-bootstrap";

function LoginIn(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id:"",
    name:"",
    email:"",
    password:"",
    developer:"",
    wallet:""
  });
  function onLoginClick() {
    console.log("signup click");
    if( user.email =="" || user.password==""){
        alert("Please fill all the fields");
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user.email,  password: user.password})
    };
    fetch('http://127.0.0.1:3001/LoginIn', requestOptions)
        .then(response => response.json())
        .then( (data) => {
            // setUser({id: data.id})
            console.log(data);
            if(data.msg === "Successfull"){
                console.log(data.dev_id);
                // this.setState({ dev_id: data.id});
                navigate('/InvDashboard/'+data.dev_id);
            }
            else{
                alert("Incorrect Email or Password \nPlease check your login information.");
            }
        });
  };
  function onChange(e){
    console.log(e.target.name, e.target.value);
    let input = {[e.target.name]: e.target.value };
    setUser({...user, ...input});
  }
  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200%', width: '200%',}}>
      <Col md="4">
        <h1>Welcome Investor!</h1>
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
        <Routes>
          <Route path="/InvDashboard/:id" element={<InvDashboard/>} />
      </Routes>
     </Container>
  );
}
export default LoginIn;