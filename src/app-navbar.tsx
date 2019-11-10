import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Sitemap } from "./sitemap.schema";

export const AppNavbar: React.FC<Sitemap> = props => {
  const { navIcon, homepage, pages = [] } = props;
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href={homepage.target}>
        <img
          src={process.env.PUBLIC_URL + navIcon.src}
          height="75"
          alt={navIcon.alt}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={homepage.target}>{homepage.name}</Nav.Link>
          {pages.map(page => (
            <Nav.Link href={page.target}>{page.name}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
