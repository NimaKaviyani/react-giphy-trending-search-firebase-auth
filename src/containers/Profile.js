import React, {Component} from 'react';
import {Button, Col, Modal, Row} from 'react-bootstrap';
import {IconContext} from 'react-icons';
import {FiEdit} from 'react-icons/fi';
import AuthLayout from '../layout/AuthLayout';
import cover from '../assets/img/cover.jpg';
import avatar from '../assets/img/avatar.png';

class Profile extends Component {
    state = {show: false};

    handleShow = () => {
        this.setState(prevState => ({
            show: !prevState.show,
        }));
    };

    render() {
        const {show} = this.state;
        return (
            <AuthLayout>
                <div
                    className="profile-cover"
                    style={{
                        backgroundImage: 'url(' + cover + ')',
                    }}
                >
                    <div
                        className="edit-profile"
                        onClick={this.handleShow}
                    >
                        <IconContext.Provider value={{className: ''}}>
                            <FiEdit />
                        </IconContext.Provider>
                    </div>
                    <div className="profile-avatar">
                        <img
                            src={avatar}
                            alt="Avatar"
                        />
                        <h3>Unknown</h3>
                    </div>
                </div>
                <Row className="mt-5 detail-wrapper">
                    <Col
                        lg={3}
                        className="mt-5"
                    >
                        <h4 className="mb-4">
                            My Information
                            <div
                                className="edit-profile"
                                onClick={this.handleShow}
                            >
                                <IconContext.Provider value={{className: ''}}>
                                    <FiEdit />
                                </IconContext.Provider>
                            </div>
                        </h4>
                        <ul className="detail-list">
                            <li><b>Name:</b> Unknown</li>
                            <li><b>Age:</b> ---</li>
                            <li><b>Email:</b> ---</li>
                            <li><b>Skype:</b> ---</li>
                        </ul>
                    </Col>
                    <Col
                        lg={9}
                        className="mt-3 mt-lg-5"
                    >
                        <h4 className="mb-4">
                            About Me
                            <div
                                className="edit-profile"
                                onClick={this.handleShow}
                            >
                                <IconContext.Provider value={{className: ''}}>
                                    <FiEdit />
                                </IconContext.Provider>
                            </div>
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid corporis,
                            cupiditate dolore, eaque labore optio praesentium quibusdam ullam voluptas voluptatum. Aut
                            consequatur et ipsam nisi sit vel.</p>
                    </Col>
                </Row>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-center"
                    centered
                    show={show}
                    scrollable
                    onHide={this.handleShow}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-center">
                            Edit Profile Detail
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Profile Image</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleShow}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </AuthLayout>
        );
    }
}

export default Profile;
