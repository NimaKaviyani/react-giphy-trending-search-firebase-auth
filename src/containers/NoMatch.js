import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PublicLayout from '../layout/PublicLayout';

class NoMatch extends Component {
    render() {
        return (
            <PublicLayout>
                <Col
                    md={8}
                    sm={10}
                >
                    <h1>404</h1>
                    <p>Ooops... Error 404 We are sorry, but the page you are looking for does not exist.</p>
                    <Link to='/'>Back to homepage</Link>
                </Col>
            </PublicLayout>
        );
    }
}

export default NoMatch;
