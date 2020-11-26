import {Field, Form, Formik} from 'formik';
import React, {Component} from 'react';
import {Button, Form as BTForm} from 'react-bootstrap';
import {IconContext} from 'react-icons';
import {FiTrash} from 'react-icons/fi';
import {TodoSchema} from '../constants/validationSchemas';
import AuthLayout from '../layout/AuthLayout';
import {getRndInteger} from '../utils/utils';

class ToDo extends Component {
    state = {
        todoList: [
            {
                id: 1,
                todo: 'Eat',
                isDone: true,
            },
            {
                id: 2,
                todo: 'Rest',
                isDone: false,
            },
            {
                id: 3,
                todo: 'Sleep',
                isDone: false,
            },
        ],
    };

    handleSubmit = (values) => {
        const todoList = this.state.todoList;
        todoList.push({
            id: getRndInteger(100, 10000),
            todo: values.todo,
            isDone: false,
        });
        this.setState({
            todoList,
        });
    };

    handleChange = (id, isDone) => {
        let todoList = this.state.todoList;
        let thisTodo = todoList.filter(item => item.id === id);
        todoList[todoList.indexOf(thisTodo[0])].isDone = !isDone;
        this.setState({
            todoList,
        });
    };

    handleDelete = (id) => {
        console.log(id);
        let todoList = this.state.todoList;
        console.log(todoList);
        let thisTodo = todoList.filter(item => item.id === id);
        todoList.splice(todoList.indexOf(thisTodo[0]), 1);
        console.log(todoList);
        this.setState({
            todoList,
        });
    };

    render() {
        const {todoList} = this.state;
        return (
            <AuthLayout>
                <h1 className="text-primary">TodoMatic</h1>
                <h3>What need to be done?</h3>
                <Formik
                    initialValues={{
                        todo: '',
                    }}
                    validationSchema={TodoSchema}
                    onSubmit={this.handleSubmit}
                >
                    {({
                          errors,
                          touched,
                      }) => (
                        <Form
                            className="auth-form form-row"
                        >
                            <div className="col-lg-11 col-md-10 col-sm-9 col-7">
                                <Field
                                    className="form-control"
                                    name="todo"
                                    type="text"
                                    placeholder="Enter todo"
                                />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3 col-5">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    block
                                >
                                    Add
                                </Button>
                            </div>
                            {errors.todo && touched.todo ? (
                                <dic className="col-12">
                                    <div className="invalid-feedback d-block">
                                        {errors.todo}
                                    </div>
                                </dic>
                            ) : null}
                        </Form>
                    )}
                </Formik>
                <BTForm className="mt-5 form-row flex-column">
                    {todoList.map(item => (
                        <div
                            key={'todo-' + item.id}
                            className="col-lg-3 col-md-6 col-sm-9 d-flex align-items-center justify-content-between"
                        >
                            <BTForm.Check
                                type="switch"
                                label={item.todo}
                                id={item.id}
                                checked={item.isDone}
                                onChange={() => {
                                    this.handleChange(item.id, item.isDone);
                                }}
                            />
                            <Button
                                variant="link"
                                onClick={() => {
                                    this.handleDelete(item.id);
                                }}
                            >
                                <IconContext.Provider
                                    value={{className: 'text-danger ml-3 pointer'}}
                                >
                                    <FiTrash />
                                </IconContext.Provider>
                            </Button>
                        </div>
                    ))}
                </BTForm>
            </AuthLayout>
        );
    }
}

export default ToDo;
