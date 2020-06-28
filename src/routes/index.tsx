import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Poker from "../pages/Poker";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/poker" component={Poker}></Route>
    </Switch>
  );
};

export default Routes;
