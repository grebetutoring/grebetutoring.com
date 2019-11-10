import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppHomepage, AppPage } from "./app-page";
import { Sitemap } from "./sitemap.schema";

export const AppContentRouter: React.FC<Sitemap> = props => {
  const { homepage, pages = [] } = props;
  return (
    <Router>
      <Switch>
        <Route exact path={homepage.target}>
          <AppHomepage src={homepage.markdown || ""} />
        </Route>
        {pages.map(page => (
          <Route key={`route:${page.target}`} path={page.target}>
            <AppPage src={page.markdown || ""} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};
