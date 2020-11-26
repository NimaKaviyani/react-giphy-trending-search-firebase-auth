import {Field, Form, Formik} from 'formik';
import React, {Component} from 'react';
import {Button, Col, FormGroup, FormLabel, Modal, Row} from 'react-bootstrap';
import {IconContext} from 'react-icons';
import {FiEdit} from 'react-icons/fi';
import {ProfileSchema} from '../constants/validationSchemas';
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

    handleSubmit = (values) => {
        console.log(values);
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
                    onHide={this.handleShow}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-center">
                            Edit Profile Detail
                        </Modal.Title>
                    </Modal.Header>
                    <Formik
                        initialValues={{
                            name: '',
                            age: '',
                            email: '',
                            skype: '',
                            about: '',
                            avatarImg: '',
                            coverImg: '',
                        }}
                        validationSchema={ProfileSchema}
                        onSubmit={this.handleSubmit}
                    >
                        {({
                              errors,
                              touched,
                          }) => (
                            <Form>
                                <Modal.Body>
                                    <div className="form-row">
                                        <FormGroup
                                            controlId="name"
                                            as={Col}
                                            md={6}
                                        >
                                            <FormLabel>Your Name</FormLabel>
                                            <Field
                                                className="form-control"
                                                name="name"
                                                type="text"
                                                placeholder="Your Name"
                                            />
                                            {errors.name && touched.name ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.name}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                        <FormGroup
                                            controlId="age"
                                            as={Col}
                                            md={6}
                                        >
                                            <FormLabel>Your Age</FormLabel>
                                            <Field
                                                className="form-control"
                                                name="age"
                                                type="text"
                                                placeholder="Your Age"
                                            />
                                            {errors.age && touched.age ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.age}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                        <FormGroup
                                            controlId="email"
                                            as={Col}
                                            md={6}
                                        >
                                            <FormLabel>Your Email</FormLabel>
                                            <Field
                                                className="form-control"
                                                name="email"
                                                type="email"
                                                placeholder="Your Email"
                                            />
                                            {errors.email && touched.email ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.email}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                        <FormGroup
                                            controlId="skype"
                                            as={Col}
                                            md={6}
                                        >
                                            <FormLabel>Your Skype</FormLabel>
                                            <Field
                                                className="form-control"
                                                name="skype"
                                                type="skype"
                                                placeholder="Your Skype"
                                            />
                                            {errors.skype && touched.skype ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.skype}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                        <FormGroup
                                            controlId="coverImg"
                                            as={Col}
                                            md={12}
                                        >
                                            <FormLabel>Your Cover Image</FormLabel>
                                            <Field
                                                className="form-control"
                                                name="coverImg"
                                                type="text"
                                                placeholder="Your Cover Image"
                                            />
                                            {errors.coverImg && touched.coverImg ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.coverImg}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                        <FormGroup
                                            controlId="avatarImg"
                                            as={Col}
                                            md={12}
                                        >
                                            <FormLabel>Your Avatar Image</FormLabel>
                                            <Field
                                                className="form-control"
                                                name="avatarImg"
                                                type="text"
                                                placeholder="Your Avatar Image"
                                            />
                                            {errors.avatarImg && touched.avatarImg ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.avatarImg}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                        <FormGroup
                                            controlId="about"
                                            as={Col}
                                            md={12}
                                        >
                                            <FormLabel>About You</FormLabel>
                                            <Field
                                                className="form-control"
                                                name="about"
                                                type="about"
                                                placeholder="About You"
                                                component="textarea"
                                                rows="3"
                                            />
                                            {errors.about && touched.about ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.about}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        type="button"
                                        variant="info"
                                        onClick={this.handleShow}
                                    >Close</Button>
                                    <Button
                                        type="submit"
                                        onClick={this.handleShow}
                                    >Save</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            </AuthLayout>
        );
    }
}

export default Profile;
