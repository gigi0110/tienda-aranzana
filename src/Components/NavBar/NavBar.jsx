import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from "../CartWidget"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Tienda de Fiesta</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Navidad" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Disfraces</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Iluminación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Decoración</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Todo</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Halloween" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Disfraces</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Iluminación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Decoración</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Todo</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cumpleaños" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Disfraces</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Iluminación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Decoración</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Todo</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Ver todo</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <CartWidget />
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar