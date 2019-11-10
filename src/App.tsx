import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppHomepage, AppPage } from "./app-page";
import { AppNavbar } from "./app-navbar";
import "./App.css";

const AppContentRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppHomepage src="main.md" />
        </Route>
        <Route path="/resources">
          <AppPage src="resources.md" />
        </Route>
      </Switch>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-background" />
      <div className="App-header">
        <AppNavbar />
      </div>
      <div className="App-content">
        <AppContentRouter />
      </div>
    </div>
  );
};

export default App;
