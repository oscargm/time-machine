import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, Dashboard } from "./scenes";
import { history } from "./history";
import { routes } from "./pods/core/navigator";

export const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path={routes.LANDING} component={LoginPage} />
      <Route exact={true} path={routes.DASHBOARD} component={Dashboard} />
    </Switch>
  </Router>
);
