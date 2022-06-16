import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from "../../pages/home";
import Users from "../../pages/users";
import Graph from "../../pages/graph";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/graph" exact component={Graph} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
