import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Logo from "../../../images/logo.svg";
import "../Header/Header.css";

const Header = () => {
  return (
    <section id="Header">
      <nav className="navbar navbar-expand-lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Logo}></Image>
          </Navbar.Brand>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Nav className="ms-auto navbar-nav align-items-center">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link className="contact-btn" href="#">
                Contact
              </Nav.Link>
              <Nav.Link className="sign-in-btn" href="#">
                Sign in
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </nav>
    </section>
  );
};

export default Header;
