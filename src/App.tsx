import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "./App.css";

import { PlaceholderImage, RGBColor } from "./placeholder-image";

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

const AppHome: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <PlaceholderImage
          width={400}
          height={200}
          bg={new RGBColor(0.25, 0.25, 0.25)}
          auto="yes"
          className="d-block w-100"
          text="First Slide"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          width={400}
          height={200}
          bg={new RGBColor(0.5, 0.5, 0.5)}
          auto="yes"
          className="d-block w-100"
          text="Second Slide"
          alt="Second Slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PlaceholderImage
          width={400}
          height={200}
          bg={new RGBColor(0.33, 0.33, 0.33)}
          auto="yes"
          className="d-block w-100"
          text="Third Slide"
          alt="Third Slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <AppNavbar />
      <AppHome />
    </div>
  );
};

export default App;
