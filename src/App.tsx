import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppNavbar } from "./app-navbar";
import { AppContentSwitch } from "./app-content-switch";
import { AppFooter } from "./app-footer";
import "./App.css";
import "./content/localFiles.ts";
import sitemap from "./content/sitemap.json";
import $ from "jquery";

declare var Pace: any;

Pace.on("start", () => {
  $(".App-content").fadeTo(0, 0);
  $(".App-footer").fadeTo(0, 0);
  $(".App-copyright").fadeTo(0, 0);
  Pace.once("done", () => {
    $(".App-content").fadeTo("fast", 1);
    $(".App-footer").fadeTo("fast", 1);
    $(".App-copyright").fadeTo("fast", 1);
  });
});

const App: React.FC = () => {
  Pace.restart();
  return (
    <Router>
      <div className="App">
        <div className="App-background" />
        <div className="App-header">
          <AppNavbar {...sitemap} />
        </div>
        <div className="App-content">
          <AppContentSwitch {...sitemap} />
          <div className="App-footer">
            <AppFooter {...sitemap} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
