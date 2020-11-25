import React, {Component, Fragment} from 'react';
import {Card, Col, Pagination, Row} from 'react-bootstrap';
import {IconContext} from 'react-icons';
import {FiSearch} from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import {fetchGif} from '../utils/fetchGif';

class SearchResult extends Component {
    state = {
        gifList: [],
        isLoaded: false,
        pagination: {},
    };

    componentDidMount() {
        this.getGif(undefined, undefined);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value !== this.props.value) {
            this.getGif(undefined, undefined);
        }
    };

    getGif = (limit, offset) => {
        const {value} = this.props;
        this.setState({isLoaded: false});
        fetchGif(value, 'search', limit, offset)
        .then(response => {
            this.setState({
                gifList: response.data,
                pagination: response.pagination,
            }, () => {
                this.setState({isLoaded: true});
            });
        })
        .catch(error => {
            console.log(error);
        });
    };

    render() {
        const {gifList, pagination, isLoaded} = this.state;
        let limit = 12,
            currentPage = pagination.offset !== 0
                ? Math.floor(pagination.offset / limit)
                : 1,
            previewPageTwo = pagination.offset !== 0
                ? currentPage > 2
                    ? currentPage - 2
                    : null
                : null,
            previewPage = pagination.offset !== 0
                ? currentPage - 1
                : null,
            nextPage = pagination.total_count > limit
                ? pagination.count > 11
                    ? currentPage + 1
                    : null
                : null,
            nextPageTwo = pagination.total_count > limit
                ? pagination.total_count - pagination.offset - 12 > 12
                    ? currentPage + 2
                    : null
                : null,
            lastPage = pagination.total_count > limit
                ? Math.floor(pagination.total_count / limit)
                : null;
        return (
            <Fragment>
                <Row className="my-5">
                    <Col xs={12}>
                        <h1>
                            <IconContext.Provider value={{className: 'text-success mr-3'}}>
                                <FiSearch />
                            </IconContext.Provider>
                            Result
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
                {
                    pagination.total_count > 12 &&
                    <Row>
                        <Col
                            xs={12}
                        >
                            <Pagination className="justify-content-center mt-5">
                                {
                                    previewPageTwo > 1 &&
                                    <Pagination.First
                                        onClick={() => {
                                            this.getGif(undefined, undefined);
                                        }}
                                    />
                                }
                                {
                                    previewPage &&
                                    <Pagination.Prev
                                        onClick={() => {
                                            this.getGif(limit, currentPage > 2 ? previewPage * limit : 0);
                                        }}
                                    />
                                }
                                {
                                    previewPageTwo > 1 &&
                                    <Pagination.Ellipsis disabled />
                                }
                                {
                                    previewPageTwo &&
                                    <Pagination.Item
                                        onClick={() => {
                                            this.getGif(limit, previewPageTwo * limit);
                                        }}
                                    >{previewPageTwo}</Pagination.Item>
                                }
                                {
                                    previewPage &&
                                    <Pagination.Item
                                        onClick={() => {
                                            this.getGif(limit, currentPage > 2 ? previewPage * limit : 0);
                                        }}
                                    >{previewPage}</Pagination.Item>
                                }
                                <Pagination.Item active>{currentPage}</Pagination.Item>
                                {
                                    nextPage &&
                                    <Pagination.Item
                                        onClick={() => {
                                            this.getGif(limit, nextPage * 12);
                                        }}
                                    >{nextPage}</Pagination.Item>
                                }
                                {
                                    nextPageTwo &&
                                    <Pagination.Item
                                        onClick={() => {
                                            this.getGif(limit, nextPageTwo * 12);
                                        }}
                                    >{nextPageTwo}</Pagination.Item>
                                }
                                {
                                    currentPage !== lastPage &&
                                    lastPage > currentPage + 2 &&
                                    <Pagination.Ellipsis />
                                }
                                {
                                    nextPage &&
                                    <Pagination.Next
                                        onClick={() => {
                                            this.getGif(limit, nextPage * 12);
                                        }}
                                    />
                                }
                                {
                                    currentPage !== lastPage &&
                                    lastPage > currentPage + 2 &&
                                    <Pagination.Last
                                        onClick={() => {
                                            this.getGif(limit, lastPage * 12);
                                        }}
                                    />
                                }

                            </Pagination>
                        </Col>
                    </Row>
                }
            </Fragment>
        );
    }
}

export default SearchResult;
