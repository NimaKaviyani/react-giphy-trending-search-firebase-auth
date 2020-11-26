import {Field, Form, Formik} from 'formik';
import React, {Component} from 'react';
import {Button, Col, FormGroup, FormLabel, Modal, Row} from 'react-bootstrap';
import {FiEdit} from 'react-icons/fi';
import {connect} from 'react-redux';
import {ProfileSchema} from '../constants/validationSchemas';
import AuthLayout from '../layout/AuthLayout';
import cover from '../assets/img/cover.jpg';
import avatar from '../assets/img/avatar.png';
import {userChanged} from '../redux/actions';

class Profile extends Component {
    state = {
        user: {
            id: undefined,
            name: undefined,
            age: undefined,
            email: undefined,
            skype: undefined,
            about: undefined,
            coverImg: cover,
            avatarImg: undefined,
        },
        show: false,
    };

    handleShow = () => {
        this.setState(prevState => ({
            show: !prevState.show,
        }));
    };

    handleSubmit = (values) => {
        const {...user} = this.state.user;
        for (const [key, value] of Object.entries(values)) {
            if (value !== '') {
                user[key] = value;
            }
        }
        this.setState({
            user,
        }, () => {
            this.handleShow();
            this.props.userChanged({name: values.name, avatarImg: values.avatarImg});
        });
    };

    render() {
        const {show, user} = this.state;
        return (
            <AuthLayout>
                <div
                    className="profile-cover"
                    style={{
                        backgroundImage: `url(${user.coverImg ? user.coverImg : cover})`,
                    }}
                >
                    <div
                        className="edit-profile"
                        onClick={this.handleShow}
                    >
                        <FiEdit />
                    </div>
                    <div className="profile-avatar">
                        <img
                            src={user.avatarImg ? user.avatarImg : avatar}
                            alt="Avatar"
                        />
                        <h3>{user.name ? user.name : 'Unknown'}</h3>
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
                                <FiEdit />
                            </div>
                        </h4>
                        <ul className="detail-list">
                            <li><b>Name:</b> {user.name ? user.name : 'Unknown'}</li>
                            <li><b>Age:</b> {user.age ? user.age : '---'}</li>
                            <li><b>Email:</b> {user.email ? user.email : '---'}</li>
                            <li><b>Skype:</b> {user.skype ? user.skype : '---'}</li>
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
                                <FiEdit />
                            </div>
                        </h4>
                        <p>{user.about ? user.about : 'No Information...'}</p>
                    </Col>
                </Row>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-center"
                    centered
                    show={show}
                    onHide={this.handleShow}
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-center">
                            Edit Profile Detail
                        </Modal.Title>
                    </Modal.Header>
                    <Formik
                        initialValues={{
                            name: user.name,
                            age: user.age,
                            email: user.email,
                            skype: user.skype,
                            about: user.about,
                            avatarImg: user.avatarImg,
                            coverImg: user.coverImg,
                        }}
                        validationSchema={ProfileSchema}
                        onSubmit={this.handleSubmit}
                    >
                        {({
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              values,
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
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
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
                                                value={values.age}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
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
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
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
                                                value={values.skype}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
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
                                                value={values.coverImg}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
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
                                                value={values.avatarImg}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
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
                                                value={values.about}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
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

export default connect(
    null,
    {
        userChanged,
    },
)(Profile);
