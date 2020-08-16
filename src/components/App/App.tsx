import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../routes/home/index";
import Login from "../../routes/login";

function App(): JSX.Element {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Router>
  )
}

export default App;
