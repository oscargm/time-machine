import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginPage, DashBoard } from "./scenes";

export const App = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={LoginPage} />
      <Route path="/pageB" component={DashBoard} />
    </Switch>
  </HashRouter>
);
