import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

import { MarkdownFile } from "./markdown-file";

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Grebe Tutoring</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#story">My Story</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <AppNavbar />
      <MarkdownFile src={"main.md"} />
    </div>
  );
};

export default App;
