import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import footer_logo from "../../../images/footer-logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="footer-wrapper">
        <Container>
          <div className="footer-about">
            <div className="footer-logo">
              <Image src={footer_logo}></Image>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <Row className="pb-5">
            <Col md={6}>
              <div className="footer-copyright">
                <p>© 2023 GEMINI Labs. All rights reserved.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="footer-privacy float-md-end">
                <ul>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
