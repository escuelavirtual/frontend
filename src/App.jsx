import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/organisms/organisms";
import { Loader } from "./components/atoms/atoms";

const Home = lazy(() => import("./pages/home/index"));
const Login = lazy(() => import("./pages/login/index"));
const PageNotFound = lazy(() => import("./pages/page404/index"));

export default function App(): JSX.Element {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
