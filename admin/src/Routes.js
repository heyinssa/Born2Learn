import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, User, Piscine } from "./components";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user" component={User} />
        <Route exact path="/piscine" component={Piscine} />
      </Switch>
    </Router>
  );
};

export default Routes;
