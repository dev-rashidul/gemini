import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import slide_img1 from "../../images/hero-slide-img1.png";
import slide_img2 from "../../images/hero-slide-img2.png";
import slide_img3 from "../../images/hero-slide-img3.png";
import "../Hero/Hero.css";

const slider = {
  items: [
    <Image className="img-fluid" src={slide_img1}></Image>,
    <Image className="img-fluid" src={slide_img2}></Image>,
    <Image className="img-fluid" src={slide_img3}></Image>,
  ],
};

const Hero = () => {
  return (
    <section id="Hero">
      <div className="hero-wrapper">
        <Container>
          <Row>
            <Col md={6}>
              <div className="hero-content">
                <h1>
                  GEMINI <br />
                  DATABASE
                </h1>
                <p>The next generation system for interior design</p>
                <div className="get-started-btn">
                  <a href="/">Get Started</a>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="hero-image-slider">
                <div className="hero-slide">
                  <Image className="img-fluid" src={slide_img1}></Image>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
