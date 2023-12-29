import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={4} size={12}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "180px" }}
            >
              <img src={logo} alt="Logo" className="img-fluid text-sm " />
            </div>
          </Col>
          <Col sm={4} size={12} className="text-center text-sm-end">
            <p className="m-0">Copyright 2024 &copy; All Right Reserved</p>
          </Col>
          <Col sm={4} size={12} className="text-center text-sm-end">
            <div className="social-icon mt-sm-0 mt-4 ">
              <a href="">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
