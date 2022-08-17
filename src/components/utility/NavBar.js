import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
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

export default NavBar;