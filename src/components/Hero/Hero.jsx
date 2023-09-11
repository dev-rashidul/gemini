import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slide_img1 from "../../images/hero-slide-img1.png";
import slide_img2 from "../../images/hero-slide-img2.png";
import slide_img3 from "../../images/hero-slide-img3.png";
import slide_img4 from "../../images/hero-slide-img4.png";
import slide_img5 from "../../images/hero-slide-img5.png";
import "../Hero/Hero.css";

const slider = [slide_img1, slide_img2, slide_img3, slide_img4, slide_img5];

// slider docs
// https://react-slick.neostack.com/docs/api
const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoPlaySpeed: 1000,
  speed: 600,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
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
                <Slider {...settings}>
                  {slider.map((img, i) => (
                    <Image key={i} src={img}></Image>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
