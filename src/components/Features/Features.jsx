import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ipad_img from "../../images/ipad-img.png";
import pen_icon from "../../images/pend-icon.svg";
import "./Features.css";

const Features = () => {
  return (
    <section id="Featurs">
      <div className="features-wrapper">
        <Container>
          <Row className="features-container">
            <Col md={6} lg={5}>
              <div className="features-content position-relative">
                <h6>key features</h6>
                <h2>Co-creation</h2>
                <p>
                  Envision your environment together. Our mobile interface
                  encourages collaborating with others in real time.
                </p>
                <div className="learn-more-btn">
                  <a href="/">Learn More</a>
                </div>
              </div>
            </Col>
            <Col md={6} lg={7}>
              <div className="features-img position-relative pt-5 pt-md-0">
                <Image className="img-fluid" src={ipad_img}></Image>
                <div className="pen-icon">
                  <Image src={pen_icon}></Image>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="features-container flex-column-reverse flex-md-row">
            <Col md={6} lg={7}>
              <div className="features-img pt-5 pt-md-0">
                <Image className="img-fluid" src={ipad_img}></Image>
              </div>
            </Col>
            <Col md={6} lg={5}>
              <div className="features-content features-content-right position-relative text-md-end float-md-end">
                <h2>Endless Palette</h2>
                <p>
                  Visualize entire collections in physical space with the
                  endless optionality of the digital world.
                </p>
                <div className="learn-more-btn">
                  <a href="/">Learn More</a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="features-container">
            <Col md={6} lg={5}>
              <div className="features-content position-relative">
                <h2>Tactile Tech</h2>
                <p>
                  Augmented reality that you can touch. Experience a seamless
                  integration of textile and tech that integrates with the
                  environment around you.
                </p>
                <div className="learn-more-btn">
                  <a href="/">Learn More</a>
                </div>
              </div>
            </Col>
            <Col md={6} lg={7}>
              <div className="features-img pt-5 pt-md-0">
                <Image className="img-fluid" src={ipad_img}></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Features;
