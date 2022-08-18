import React, { useState, Component } from "react";
import { Link , Routes, Route, useNavigate} from "react-router-dom";
import DevDashboard from '../developer/DevDashboard';
import { Container, Button, Row, Col, Form } from "react-bootstrap";
function LoginDev(props) {
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
    fetch('http://127.0.0.1:3001/LoginDev', requestOptions)
        .then(response => response.json())
        .then( (data) => {
            if(data.msg == "Successfull"){
                console.log(JSON.stringify(data.id));
                // this.setState({ dev_id: data.id});
                navigate('/DevDashboard', { dev_id: data.id });
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
        <Routes>
          <Route path="/DevDashboard" element={<DevDashboard/>} />
      </Routes>
     </Container>
  );
}
export default LoginDev;






