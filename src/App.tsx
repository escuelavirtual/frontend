import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importacion de Pages
const Home = lazy(() => import("./pages/home/index"));
const Login = lazy(() => import("./pages/login/index"));
const PageNotFound = lazy(() => import("./pages/Page404/index"));

export default function App(): JSX.Element {
  return (
    <Suspense fallback={<h1 className="loader">Loading...</h1>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}
