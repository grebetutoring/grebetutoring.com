import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppHomepage, AppPage } from "./app-page";
import { Sitemap } from "./sitemap.schema";

export const AppContentRouter: React.FC<Sitemap> = props => {
  const { homepage, pages = [] } = props;
  return (
    <Switch>
      {pages.map(page => (
        <Route path={page.target}>
          <AppPage key={`route:${page.target}`} src={page.markdown || ""} />
        </Route>
      ))}
      <Route path={"/"}>
        <AppHomepage src={homepage.markdown || ""} />
      </Route>
    </Switch>
  );
};
