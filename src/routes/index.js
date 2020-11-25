/* Packages */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
// import AppContainer from "../containers/app";
// import {configureStore} from "../redux/store";
import {Provider} from "react-redux";
import Loader from "react-loader-spinner";

class App extends Component {
    render() {
        let loading = "has-loading";
        document.body.classList.add(loading);
        return (
            null
            /*<Provider store={configureStore()}>
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
                                path="/"
                                component={AppContainer}
                            />
                        </Switch>
                    </Router>
                </CookiesProvider>
            </Provider>*/
        );
    }
}

export default ReactDOM.render(
    <App />,
    document.getElementById("root"),
);
