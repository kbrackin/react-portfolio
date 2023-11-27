import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App"

function Navigation() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" className='navigation'>
          <Container>
            <Navbar.Brand>Kevin Brackin</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              <Nav.Link href="/Contact">Contact Me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    )
}

export default Navigation;