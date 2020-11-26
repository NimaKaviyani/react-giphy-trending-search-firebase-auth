import React, {Component} from 'react';
import {Container, Dropdown, Nav, Navbar, NavItem, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import avatar from '../assets/img/avatar.png';

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
                        <Nav className="mr-auto">
                            <Link
                                className="nav-link"
                                to='/search'
                            >Search Gif</Link>
                            <Link
                                className="nav-link"
                                to='/user-list'
                            >Users List</Link>
                        </Nav>
                        <Nav>
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>
                                    <div className="avatar-wrapper">
                                        <img
                                            src={avatar}
                                            alt="User Avatar"
                                        />
                                        Unknown
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Link
                                        className="dropdown-item"
                                        to="/profile"
                                    >Profile</Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/to-do-list"
                                    >To Do List</Link>
                                    <Dropdown.Divider />
                                    <Link
                                        className="dropdown-item"
                                        to="#"
                                    >Sign Out</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
