import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../components/images/Shopon-Logo.png"; 
function NavScrollExample({item1,item2,item3,item4,item5,item6}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#"><img src={logo} alt="logo" width="120" height="50" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">{item1}</Nav.Link>
            <Nav.Link href="#action2">{item2}</Nav.Link>
            <Nav.Link href="#action3">{item3}</Nav.Link>
            <Nav.Link href="#action4">{item5}</Nav.Link>
            <Nav.Link href="#action5">{item4}</Nav.Link>
            <Nav.Link href="#action6">{item6}</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;