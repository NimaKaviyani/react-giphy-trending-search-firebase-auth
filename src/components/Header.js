import React, {Component} from 'react';
import {Container, Dropdown, Nav, Navbar, NavItem, NavLink} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import avatar from '../assets/img/avatar.png';
import {Cookies} from 'react-cookie';

const cookies = new Cookies();

class Header extends Component {
    handleSignOut = () => {
        cookies.remove('uid');
        setTimeout(() => {
            window.location.href = '/';
        }, 15);
    };

    render() {
        const {user} = this.props;
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
                                            src={user.user.avatarImg ? user.user.avatarImg !== '' ? user.user.avatarImg : avatar : avatar}
                                            alt="User Avatar"
                                        />
                                        {user.user.name ? user.user.name !== '' ? user.user.name : 'Unknown' : 'Unknown'}
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
                                        onClick={() => {
                                            this.handleSignOut();
                                        }}
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

const mapStateToProps = ({user}) => {
    return {user};
};
export default connect(
    mapStateToProps,
    null,
)(Header);
