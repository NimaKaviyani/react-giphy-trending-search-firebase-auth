import React, {Component} from 'react';
import {Col, Form, Row} from 'react-bootstrap';

class SearchBar extends Component {
    state = {
        error: '',
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({error: ''});
        let value = e.target.value;
        if (value.length > 2) {
            this.props.onSearch(value);
        } else {
            if (value !== '') {
                this.setState({error: 'Search key is too short!'});
            }
            this.props.onSearch('');
        }
    };

    render() {
        const {error} = this.state;
        return (
            <Row className="justify-content-center">
                <Col
                    lg={6}
                    md={8}
                    sm={10}
                >
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Control
                            id="search"
                            placeholder="Search..."
                            title="Search"
                            name="search"
                            onChange={this.handleChange}
                        />
                        {error !== '' ? <Form.Text className="text-danger position-absolute">{error}</Form.Text> : null}
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default SearchBar;
