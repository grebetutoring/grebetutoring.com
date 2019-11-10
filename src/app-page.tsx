import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MarkdownFile } from "./markdown-file";
import "./App.css";

export const AppPage: React.FC<{ src: string }> = props => {
  return (
    <Row className="App-page">
      <Col className="App-gutter" />
      <Col lg={9} className="App-content-inner">
        <MarkdownFile src={props.src} />
      </Col>
      <Col lg={2} className="App-gutter App-watermark" />
    </Row>
  );
};

export const AppHomepage: React.FC<{ src: string }> = props => {
  return (
    <Row className="App-homepage">
      <Col className="App-gutter" />
      <Col lg={10} className="App-content-inner">
        <MarkdownFile src={props.src} />
      </Col>
      <Col className="App-gutter" />
    </Row>
  );
};
