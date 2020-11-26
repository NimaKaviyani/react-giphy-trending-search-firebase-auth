/* Packages */
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import {Provider} from "react-redux";
import Loader from "react-loader-spinner";
import Login from "./containers/Login";
import Profile from './containers/Profile';
import ToDo from './containers/ToDo';
import {configureStore} from "./redux/store";
import NoMatch from "./containers/NoMatch";
import Register from "./containers/Register";
import Search from "./containers/Search";

class App extends Component {
    render() {
        let loading = "has-loading";
        document.body.classList.add(loading);
        return (
            <Provider store={configureStore()}>
                <CookiesProvider>
                    <Loader
                        className="loading"
                        type="Puff"
                        color="#6d48e5"
                        height={100}
                        width={100}
                    />
                    <Router>
                        <Switch>
                            <Route
                                exact
                                path={"/"}
                                component={Login}
                                key={1}
                            />
                            <Route
                                path={"/register"}
                                component={Register}
                                key={2}
                            />
                            <Route
                                path={"/search"}
                                component={Search}
                                key={3}
                            />
                            <Route
                                path={"/profile"}
                                component={Profile}
                                key={4}
                            />
                            <Route
                                path={"/to-do-list"}
                                component={ToDo}
                                key={5}
                            />
                            <Route
                                path={"/to-do-list"}
                                component={ToDo}
                                key={5}
                            />
                            <Route
                                component={NoMatch}
                                key={4}
                            />
                        </Switch>
                    </Router>
                </CookiesProvider>
            </Provider>
        );
    }
}

export default App;
