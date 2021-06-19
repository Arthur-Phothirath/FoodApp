import React  from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";

import LoginScreen from "./screens/user/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/user/RegisterScreen/RegisterScreen";
import SearchFood from "./screens/SearchFood/SearchFood";


// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/" component= {LoginScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route exact path="/searchfood" component={SearchFood} /> 
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
