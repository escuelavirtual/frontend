import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.scss";

const Home = React.lazy(() => import("../../routes/home/index"));
const Login = React.lazy(() => import("../../routes/login/index"));

function App(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <span>Cargando ...</span>
        </div>
      }>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Router>
    </Suspense>
  );
}

export default App;
