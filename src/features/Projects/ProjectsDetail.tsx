import React from "react";
import CustomNavBar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function ProjectsDetail() {
  const location = useLocation();
  const { propCard } = location.state;
  const { title, imgUrl } = propCard;
  return (
    <>
      <CustomNavBar />
      <Banner />
      <Skills />

      <section className="projectDetail" id="project">
        <Container>
          <h2>{title}</h2>

          <Row>
            <Col>
              <Row className="row-gap-3">
                <Col sm={3}>
                  <img src={imgUrl} alt="Project Image" />
                </Col>

                <Col sm={3}>
                  <img src={imgUrl} alt="Project Image" />
                </Col>

                <Col sm={3}>
                  <img src={imgUrl} alt="Project Image" />
                </Col>
                <Col sm={3}>
                  <img src={imgUrl} alt="Project Image" />
                </Col>
                <Col sm={3}>
                  <img src={imgUrl} alt="Project Image" />
                </Col>
                <Col sm={3}>
                  <img src={imgUrl} alt="Project Image" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

export default ProjectsDetail;
