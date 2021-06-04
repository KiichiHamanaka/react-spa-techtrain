import React from 'react';
import './App.css';
import Header from "./conponents/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Signin from "./conponents/Signin";
import Signup from "./conponents/Signup";

const App = () => {
    return (
        <Router>
                <Header />
                <Switch>
                    <Route path="/signin">
                        <Signin />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>
        </Router>
    );
}

export default App;
