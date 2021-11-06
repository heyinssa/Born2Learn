import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Entrance,
  Login,
  Main,
  MyPiscine,
  MyEvaluation,
  RegisterPiscine,
  MySubject,
  Register,
} from 'pages';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Entrance} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/main" component={Main} />
          <Route exact path="/myPiscine/:index" component={MyPiscine} />
          <Route exact path="/myEvaluation/:index" component={MyEvaluation} />
          <Route exact path="/myPiscine/view/:index" component={MySubject} />
          <Route
            exact
            path="/registerPiscine/:index"
            component={RegisterPiscine}
          />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
