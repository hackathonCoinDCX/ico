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

class LoginIn extends Component {
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
            <h1>Welcome Investor!</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={this.onLoginClick}>Login</Button>
            <p className="mt-2">
              Don't have account? <Link to="/SignUpIn">Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default LoginIn;




// const Login=()=>{ 
// 	const [email,setEmail]=useState(""); 
// 	const [passw,setPassw]=useState(""); 
// 	const[dataInput, setDataInput]=useState(""); 
// 	const submitThis=()=>{
// 		const info={email:email,passw:passw}; 
// 		setDataInput([info]);
// 	}
// 	return(
// 	<div>
// 		<form action="" onSubmit={submitThis}> 
// 			<div> 
// 				<label htmlFor="email">Email</label>
// 				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
// 			</div> 
// 			<div> 
// 				<label htmlFor="passw">Password</label>
// 			<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
// 			</div>  
// 			<button type="submit">Login</button>
// 		</form>
// 	</div>
// )} 
