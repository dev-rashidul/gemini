import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import arrow_icon from "../../images/arrow-icon.svg";
import email_icon from "../../images/email-icon.svg";
import linkedin_icon from "../../images/linkedin-icon.svg";
import youtube_icon from "../../images/youtube-icon.svg";
import "./About.css";

const About = () => {
  return (
    <section id="About">
      <div className="about-wrapper">
        <Container>
          <Row>
            <Col md={6} lg={7}>
              <div className="about-content">
                <span>about us</span>
                <h2>Title about company</h2>
                <p>
                  Company description <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <div className="about-us-btn common-btn">
                  <a href="/">Contact Us</a>
                </div>
              </div>
            </Col>
            <Col md={6} lg={5}>
              <div className="request-demo">
                <h2>See GEMINI in action</h2>
                <p>
                  Request a demo and discover how GEMINI can...Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="request-demo-form-container">
                  <form>
                    <div className="request-demo-form">
                      <div className="demo-input-field">
                        <input
                          type="email"
                          placeholder="What’s your email address?"
                          required
                        />
                        <button type="submit"> <Image src={arrow_icon}></Image> </button>
                      </div>
                      <div className="demo-check-field">
                        <input type="checkbox" />
                        <label>I agree to GEMINI’s terms and conditions</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="social-media">
                    <ul>
                        <li><a href="/"><Image src={linkedin_icon}></Image></a></li>
                        <li><a href="/"><Image src={youtube_icon}></Image></a></li>
                        <li><a href="/"><Image src={email_icon}></Image></a></li>
                    </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
