import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Layout from "./layout";
import FeedScreen from "./screens/Feed";
import MessagesScreen from "./screens/Messages";

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact component={FeedScreen} path="/" />
        <Route component={MessagesScreen} path="/messages" />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
