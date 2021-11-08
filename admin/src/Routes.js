import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserPage from "./components/UserPage/Main";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserPage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/piscine" component={UserPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
