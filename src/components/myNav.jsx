import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 m-0 p-0">
      <Container fluid className="px-4">
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;