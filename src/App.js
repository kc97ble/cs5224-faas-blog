import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from "./components/Home";
import Article from "./components/Article";
import Manage from "./components/Manage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/manage" component={Manage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
