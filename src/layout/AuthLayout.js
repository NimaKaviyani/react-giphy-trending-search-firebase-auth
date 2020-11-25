import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Header from '../components/Header';

class AuthLayout extends Component {
    render() {
        const {children} = this.props;

        return (
            <Fragment>
                <Header />
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            {children}
                        </Col>
                        <Col xs={12}>
                            <hr />
                            <p className="text-center">All Rights Reserved!</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AuthLayout;
