import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Orders from "./Containers/Orders";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </Router>
  );
}

export default Routes;
