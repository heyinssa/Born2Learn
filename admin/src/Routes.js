import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./components";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user" component={Main} />
        <Route exact path="/piscine" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
