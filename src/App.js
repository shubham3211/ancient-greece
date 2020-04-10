import React from "react";
import Home from "./Home";
import ReactRouterComp from "./ReactRouterComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/route" component={ReactRouterComp} />
      </Switch>
    </Router>
  );
}

export default App;
