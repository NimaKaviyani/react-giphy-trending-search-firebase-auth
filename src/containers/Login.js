import React, {Component} from "react";
import {Button, Col, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";

class Login extends Component {
    render() {
        return (
            <PublicLayout title="Login">
                <Col
                    xl={5}
                    lg={6}
                    md={7}
                >
                    <Form className="auth-form">
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            {/*<Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>*/}
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            block
                        >
                            Submit
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        No account? <Link to="/register">Create one!</Link>
                    </div>
                </Col>
            </PublicLayout>
        );
    }
}

export default Login;
