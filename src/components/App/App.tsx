import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importacion de rutas
const Home = lazy(() => import("../../routes/home/index"));
const Login = lazy(() => import("../../routes/login/index"));
const PageNotFound = lazy(() => import("../../routes/PageNotFound/index"));

function App(): JSX.Element {
  return (
    <Suspense fallback={<div>Hola</div>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
