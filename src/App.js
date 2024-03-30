import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Navbar } from "./views/components/Navbar/Navbar.js";
import { ServerReceive } from "./utils/ServerReceive.js";
import { ServerSend } from "./utils/ServerSend.js";
import Graphs from "./views/pages/Graphs.js";
import StateDiagram from "./views/pages/StateDiagram.js";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/data" />
        </Route>
        <Route exact path="/data">
          <ServerReceive />
        </Route>
        <Route exact path="/send">
          <ServerSend />
        </Route>
        <Route exact path="/graphs">
          <Graphs />
        </Route>
        <Route exact path="/data/StateDiagram">
          <StateDiagram />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;