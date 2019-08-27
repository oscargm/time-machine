import * as React from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { store } from "./store";
import { routes } from "@pods/core/navigator";
import { LoginPage, Dashboard } from "@scenes";

export const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact={true} path={routes.LANDING} component={LoginPage} />
        <Route path={routes.DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
);
