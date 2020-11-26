import React, {Component} from 'react';
import {Button, Col, FormGroup, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {SignInSchema} from '../constants/validationSchemas';
import PublicLayout from '../layout/PublicLayout';
import {Formik, Form, Field} from 'formik';

class Login extends Component {
    handleSubmit = (values) => {
        console.log(values);
    };

    render() {

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
