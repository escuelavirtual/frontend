import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/organisms/organisms";
import { Home, Login, PageNotFound } from "./pages/pages";

export default function App(): JSX.Element {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
