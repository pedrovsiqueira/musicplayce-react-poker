import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
};

export default Routes;
