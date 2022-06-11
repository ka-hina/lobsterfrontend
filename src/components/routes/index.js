import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from "../../pages/home";
import Users from "../../pages/users";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
