import React from "react";
import { AppNavbar } from "./app-navbar";
import { AppContentRouter } from "./app-content-router";
import "./App.css";
import "./content/localFiles.ts";
import sitemap from "./content/sitemap.json";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-background" />
      <div className="App-header">
        <AppNavbar {...sitemap} />
      </div>
      <div className="App-content">
        <AppContentRouter {...sitemap} />
      </div>
    </div>
  );
};

export default App;
