import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

function NavBar(props) {

  let navigate = useNavigate();

	const [session, setSession] = useState("");

  console.log("NavBar Props :", props);
  console.log("seesion: ", session);

  if(session == ""){
    console.log("checksession of navbar");
		fetch("http://127.0.0.1:3001/checksession").then((res) => res.json()).then((json) => {
		console.log(json);
    if(json.isExpire == false){
      navigate("/DevDas");
    }
		setSession(json)
		})
  }

  if(session == "") return (<>please wait ......</>)
  else {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ICO APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/SignUpDev">SignUpDev</Nav.Link>
            <Nav.Link href="/LoginDev">LoginDev</Nav.Link>
            <Nav.Link href="/SignUpIn">SignUpIn</Nav.Link>
            <Nav.Link href="/LoginIn">LoginIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;