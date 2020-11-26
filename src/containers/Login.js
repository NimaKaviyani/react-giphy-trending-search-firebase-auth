import React, {Component} from 'react';
import {Button, Col, FormGroup, FormLabel} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {SignInSchema} from '../constants/validationSchemas';
import PublicLayout from '../layout/PublicLayout';
import {Formik, Form, Field} from 'formik';
import {auth} from '../utils/firebase';
import {popupAlert} from '../utils/utils';
import {Cookies} from 'react-cookie';

const cookies = new Cookies();

class Login extends Component {
    state = {success: false};
    handleSubmit = async (values) => {
        await
            auth.signInWithEmailAndPassword(values.email, values.password)
                .then(authUser => {
                    cookies.set('uid', authUser.user.uid);
                    popupAlert(200, 'Login Success!', 'success');
                    setTimeout(() => {
                        this.setState({
                            success: true,
                        });
                    }, 500);
                })
                .catch(error => {
                    console.log(error);
                    popupAlert(423, error.message, 'danger');
                });
    };

    render() {
        const {success} = this.state;
        if (success) {
            return <Redirect to="/search" />;
        }
        return (
            <PublicLayout title="Login">
                <Col
                    xl={5}
                    lg={6}
                    md={7}
                >
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={SignInSchema}
                        onSubmit={this.handleSubmit}
                    >
                        {({
                              errors,
                              touched,
                          }) => (
                            <Form className="auth-form">
                                <FormGroup controlId="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Field
                                        className="form-control"
                                        name="email"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    {errors.email && touched.email ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup controlId="password">
                                    <FormLabel>Password</FormLabel>
                                    <Field
                                        className="form-control"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    {errors.password && touched.password ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </FormGroup>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    block
                                >
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <div className="text-center mt-3">
                        No account? <Link to="/register">Create one!</Link>
                    </div>
                </Col>
            </PublicLayout>
        );
    }
}

export default Login;
