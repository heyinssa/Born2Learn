import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Login, MyPiscine, RegisterPiscine, MyPiscineView } from 'pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/main" component={Main} />
        <Route exact path="/myPiscine/:index" component={MyPiscine} />
        <Route exact path="/myPiscine/view/:index" component={MyPiscineView} />

        <Route
          exact
          path="/registerPiscine/:index"
          component={RegisterPiscine}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
