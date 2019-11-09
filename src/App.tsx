import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MarkdownFile } from "./markdown-file";

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Grebe Tutoring</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/resources">Resources</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Resources: React.FC = () => {
  return (
    <Container className="App-Resources">
      <Row>
        <Col className="App-gutter" />
        <Col xl={10}>
          <MarkdownFile src={"resources.md"} />;
        </Col>
        <Col className="App-gutter" />
      </Row>
    </Container>
  );
};

const Home: React.FC = () => {
  return <MarkdownFile src={"main.md"} />;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <AppNavbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
