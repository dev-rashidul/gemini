import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Platform.css";

const Platform = () => {
  return (
    <section id="Platform">
      <div className="platform-wrapper">
        <Container>
          <Row className="align-items-end">
            <Col md={8} lg={9}>
              <div className="platform-content">
                <span>OUR PLATFORM</span>
                <h2>
                  Merging <span>digital and the real-world</span> in one neat
                  little bundle
                </h2>
                <p>
                  Description of how GEMINI can help their clients with their
                  cutting-edge technology.. <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
            <Col md={4} lg={3}>
              <div className="platform-btn">
                <div className="common-btn float-md-end">
                  <a href="/">Request Demo</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Platform;
