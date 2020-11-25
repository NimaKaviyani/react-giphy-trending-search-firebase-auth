import React, {Component} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="primary"
                variant="dark"
                className="mb-5"
            >
                <Container>
                    <Navbar.Brand href="#home">Giphy React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link
                                eventKey={2}
                                href="#memes"
                            >
                                Dank memes
                            </Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
