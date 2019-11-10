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
    <Container className="App-resources">
      <MarkdownFile src={"resources.md"} />;
    </Container>
  );
};

const Home: React.FC = () => {
  return <MarkdownFile src={"main.md"} />;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-background" />
      <div className="App-header">
        <AppNavbar />
      </div>
      <div className="App-content">
        <Router>
          <Switch>
            {/* The Home route does not get the column layout */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* All other pages get the watermarked column format */}
            <Row>
              <Col xs={1} className="App-gutter" />
              <Col xl={9}>
                <Route path="/resources">
                  <Resources />
                </Route>
              </Col>
              <Col xs={2} className="App-gutter App-watermark" />
            </Row>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
