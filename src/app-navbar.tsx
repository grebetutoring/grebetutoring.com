import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Sitemap } from "./sitemap.schema";
import { getFile } from "./content/localFiles";

export const AppNavbar: React.FC<Sitemap> = props => {
  const { navIcon, homepage, pages = [] } = props;

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href={homepage.target}>
        <img src={getFile(navIcon.src)} height="75" alt={navIcon.alt} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={homepage.target}>{homepage.name}</Nav.Link>
          {pages.map(page => (
            <LinkContainer to={page.target}>
              <Nav.Link>{page.name}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
