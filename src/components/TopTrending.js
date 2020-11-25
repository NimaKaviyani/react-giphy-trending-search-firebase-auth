import React, {Component, Fragment} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {IconContext} from 'react-icons';
import {FiTrendingUp} from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import {fetchGif} from '../utils/fetchGif';

class TopTrending extends Component {
    state = {
        gifList: [],
        isLoaded: false,
    };

    componentDidMount() {
        this.getGif();
    }

    getGif = () => {
        this.setState({isLoaded: false});
        fetchGif(null, 'trending')
        .then(response => {
            this.setState({
                gifList: response.data,
            }, () => {
                this.setState({isLoaded: true});
            });
        })
        .catch(error => {
            console.log(error);
        });
    };

    render() {
        const {gifList, isLoaded} = this.state;
        return (
            <Fragment>
                <Row className="my-5">
                    <Col xs={12}>
                        <h1>
                            <IconContext.Provider value={{className: 'text-warning mr-3'}}>
                                <FiTrendingUp />
                            </IconContext.Provider>
                            Trending
                        </h1>
                    </Col>
                </Row>
                <Row className="gif-list no-gutters position-relative">
                    <Loader
                        className={['inline-loading', isLoaded && 'd-none'].join(' ')}
                        type="ThreeDots"
                        color="#6d48e5"
                        height={50}
                        width={50}
                    />
                    {
                        gifList.length !== 0 ? (
                            gifList.map(item => (
                                <Col
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    key={'trend-' + item.id}
                                >
                                    <Card>
                                        <Card.Body className="text-center">
                                            <img
                                                src={item.images.preview_gif.url}
                                                alt="GIF"
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Col
                                xs={12}
                                className="no-result"
                            >
                                <p className="text-center text-muted mb-0">{isLoaded && 'No Result Found!'}</p>
                            </Col>
                        )
                    }
                </Row>
            </Fragment>
        );
    }
}

export default TopTrending;
