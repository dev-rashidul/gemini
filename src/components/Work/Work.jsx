import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import generate_img from "../../images/generate-img.png";
import store_img from "../../images/store-img.png";
import visualize_img from "../../images/visualize-img.png";
import "./Work.css";

const Work = () => {
  return (
    <section id="Work">
      <div className="work-wrapper">
        <Container>
          <Row className="justify-content-between">
            <Col md={6} lg={4}>
              <div className="work-card position-relative text-center">
                <div className="work-card-img">
                  <Image className="img-fluid" src={generate_img}></Image>
                </div>
                <div className="work-card-content">
                    <h3>Generate</h3>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="pt-5 pt-md-0">
              <div className="work-card position-relative text-center">
                <div className="work-card-img">
                  <Image className="img-fluid" src={store_img}></Image>
                </div>
                <div className="work-card-content">
                    <h3>Store</h3>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="pt-5 pt-lg-0">
              <div className="work-card position-relative text-center">
                <div className="work-card-img">
                  <Image className="img-fluid" src={visualize_img}></Image>
                </div>
                <div className="work-card-content">
                    <h3>Visualize</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Work;
