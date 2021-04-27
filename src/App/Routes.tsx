import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import FeedScreen from "../screens/Feed";
import MessagesScreen from "../screens/Messages";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={FeedScreen} path="/home" />
      <Route component={MessagesScreen} path="/messages" />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
