import React, {Component} from 'react';
import {Button, Card, Col, Modal, Row} from 'react-bootstrap';
import AuthLayout from '../layout/AuthLayout';
import avatar from '../assets/img/avatar.png';
import cover from '../assets/img/cover.jpg';

class UsersList extends Component {
    state = {
        userList: [
            {
                id: 1,
                name: 'Nima Kaviyani',
                isFollowed: false,
                age: 31,
                email: 'nima.kaviyani@gmail.com',
                skype: '+1 222 654646',
                about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid corporis, cupiditate dolore, eaque labore optio praesentium quibusdam ullam voluptas voluptatum. Aut consequatur et ipsam nisi sit vel.',
                coverImg: cover,
                avatarImg: avatar,
            },
            {
                id: 2,
                name: 'Kaviyani',
                isFollowed: false,
                age: 30,
                email: 'kaviyani@gmail.com',
                skype: '+98 912 3456789',
                about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid corporis, cupiditate dolore, eaque labore optio praesentium quibusdam ullam voluptas voluptatum. Aut consequatur et ipsam nisi sit vel.',
                coverImg: cover,
                avatarImg: avatar,
            },
            {
                id: 3,
                name: 'Nima',
                isFollowed: true,
                age: 29,
                email: 'nima@kaviyani.com',
                skype: '+1 123 987654',
                about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid corporis, cupiditate dolore, eaque labore optio praesentium quibusdam ullam voluptas voluptatum. Aut consequatur et ipsam nisi sit vel.',
                coverImg: cover,
                avatarImg: avatar,
            },
            {
                id: 4,
                name: 'User Family',
                isFollowed: false,
                age: 28,
                email: 'email@exmaple.com',
                skype: '+1 333 111111',
                about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid corporis, cupiditate dolore, eaque labore optio praesentium quibusdam ullam voluptas voluptatum. Aut consequatur et ipsam nisi sit vel.',
                coverImg: cover,
                avatarImg: avatar,
            },
            {
                id: 5,
                name: 'Name of user',
                isFollowed: false,
                age: 27,
                email: 'name.user@gmail.com',
                skype: '+1 222 000000',
                about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid corporis, cupiditate dolore, eaque labore optio praesentium quibusdam ullam voluptas voluptatum. Aut consequatur et ipsam nisi sit vel.',
                coverImg: cover,
                avatarImg: avatar,
            },
        ],
        selectedUser: {
            id: undefined,
            name: undefined,
            isFollowed: undefined,
            age: undefined,
            email: undefined,
            skype: undefined,
            about: undefined,
            coverImg: undefined,
            avatarImg: undefined,
        },
        show: false,
    };

    handleShowDetail = (id) => {
        let userList = this.state.userList;
        let thisUser = userList.filter(item => item.id === id);
        this.setState({
            selectedUser: {
                id: thisUser[0].id,
                name: thisUser[0].name,
                isFollowed: thisUser[0].isFollowed,
                age: thisUser[0].age,
                email: thisUser[0].email,
                skype: thisUser[0].skype,
                about: thisUser[0].about,
                coverImg: thisUser[0].coverImg,
                avatarImg: thisUser[0].avatarImg,
            },
        }, () => {
            this.handleShow();
        });
    };

    handleFollow = (e, id, isFollowed) => {
        e.stopPropagation();
        let userList = this.state.userList;
        let thisUser = userList.filter(item => item.id === id);
        userList[userList.indexOf(thisUser[0])].isFollowed = !isFollowed;
        this.setState({
            userList,
        });
    };

    handleShow = () => {
        this.setState(prevState => ({
            show: !prevState.show,
        }));
    };

    render() {
        const {userList, selectedUser, show} = this.state;
        return (
            <AuthLayout>
                <Row className="user-list">
                    {userList.map(item => (
                        <Col
                            lg={6}
                            key={'user-' + item.id}
                            className="mb-3"
                        >
                            <Card
                                className="pointer"
                                onClick={() => {
                                    this.handleShowDetail(item.id);
                                }}
                            >
                                <Card.Body>
                                    <div
                                        className="d-flex align-items-center user"
                                    >
                                        <img
                                            src={item.avatarImg}
                                            alt="Avatar"
                                        />
                                        {item.name}
                                        <Button
                                            className="ml-auto"
                                            variant={item.isFollowed ? 'danger' : 'success'}
                                            onClick={(e) => {
                                                this.handleFollow(e, item.id, item.isFollowed);
                                            }}
                                        >{item.isFollowed ? 'Unfollow' : 'Follow'}</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
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
                            {selectedUser.name} Profile Detail
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="detail-wrapper">
                            <Col
                                lg={12}
                            >
                                <h4 className="mb-4">
                                    Information
                                </h4>
                                <ul className="detail-list">
                                    <li><b>Name:</b> {selectedUser.name}</li>
                                    <li><b>Age:</b> {selectedUser.age}</li>
                                    <li><b>Email:</b> {selectedUser.email}</li>
                                    <li><b>Skype:</b> {selectedUser.skype}</li>
                                </ul>
                            </Col>
                            <Col>
                                <hr />
                            </Col>
                            <Col
                                lg={12}
                            >
                                <h4 className="mb-4">
                                    About
                                </h4>
                                <p>{selectedUser.about}</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            type="button"
                            onClick={this.handleShow}
                        >Close</Button>
                    </Modal.Footer>
                </Modal>
            </AuthLayout>
        );
    }
}

export default UsersList;
