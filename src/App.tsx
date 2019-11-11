import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { AppNavbar } from "./app-navbar";
import { AppContentRouter } from "./app-content-router";
import { AppFooter } from "./app-footer";
import "./App.css";
import "./content/localFiles.ts";
import sitemap from "./content/sitemap.json";

const App: React.FC = () => {
  return (
    <Router >
      <div className="App">
        <div className="App-background" />
        <div className="App-header">
          <AppNavbar {...sitemap} />
        </div>
        <div className="App-content">
          <AppContentRouter {...sitemap} />
          <div className="App-footer">
            <AppFooter {...sitemap} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;


