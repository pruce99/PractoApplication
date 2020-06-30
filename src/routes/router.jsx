import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../modules/homepage";
import UserPanel from "../modules/user-panel";
import AdminPanel from "../modules/admin-panel";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/user" component={UserPanel} />
        <Route exact path="/admin" component={AdminPanel} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
