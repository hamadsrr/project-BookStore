import React from "react";

import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col sm={12}>
          <Navbar  variant="light">
            <Container id="foot">
              <Nav className="me-auto">
                <Nav.Link className="footer-links" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="footer-links" href="#features">
                  About
                </Nav.Link>
                <Nav.Link className="footer-links" href="#pricing">
                  Services
                </Nav.Link>
                <Nav.Link className="footer-links" href="#home">
                  Works
                </Nav.Link>
                <Nav.Link className="footer-links" href="#features">
                  FAQs
                </Nav.Link>
                <Nav.Link className="footer-links" href="#pricing">
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
