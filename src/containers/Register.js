import React, {Component} from 'react';
import {Button, Col, FormGroup, FormLabel, FormText} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {SignUpSchema} from '../constants/validationSchemas';
import PublicLayout from '../layout/PublicLayout';
import {Formik, Form, Field} from 'formik';
import {auth} from '../utils/firebase';
import {popupAlert} from '../utils/utils';

class Register extends Component {
    state = {success: false};
    handleSubmit = async (values) => {
        console.log(values);
        await auth.createUserWithEmailAndPassword(values.email, values.password)
                  .then(authUser => {
                      console.log(authUser);
                      if (authUser.operationType === 'signIn') {
                          popupAlert(423, 'Success!', 'success');
                          setTimeout(() => {
                              this.setState({
                                  success: true,
                              });
                          }, 1000);
                      }
                  })
                  .catch(error => {
                      console.log(error);
                      popupAlert(423, error.message, 'danger');
                  });
    };

    render() {
        const {success} = this.state;
        if (success) {
            return <Redirect to="/" />;
        }
        return (
            <PublicLayout title="Register">
                <Col
                    xl={5}
                    lg={6}
                    md={7}
                >
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            repeat: '',
                        }}
                        validationSchema={SignUpSchema}
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
                                    <FormText className="text-muted">
                                        We'll never share your email with anyone else.
                                    </FormText>
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
                                <FormGroup controlId="repeat">
                                    <FormLabel>Password</FormLabel>
                                    <Field
                                        className="form-control"
                                        name="repeat"
                                        type="password"
                                        placeholder="Repeat Password"
                                    />
                                    {errors.repeat && touched.repeat ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.repeat}
                                        </div>
                                    ) : null}
                                </FormGroup>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    block
                                >
                                    Register
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <div className="text-center mt-3">
                        <Link to="/">Already have account?</Link>
                    </div>
                </Col>
            </PublicLayout>
        );
    }
}

export default Register;
