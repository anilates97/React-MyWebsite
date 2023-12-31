import React, { useEffect } from "react";
import CustomNavBar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { MainlyUsedTech } from "./ProjectCard";

function ProjectsDetail() {
  const location = useLocation();
  const { propCard } = location.state;
  const { title, type, description, mainlyUsedTechnologies, imgUrl, id } =
    propCard;

  useEffect(() => {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <CustomNavBar isDetail />
      <Banner />

      <section className="projectDetail" id="project">
        <Container>
          <Row className="row-gap-3">
            <Col sm={12}>
              <h2>{title}</h2>
              <p>{description}</p>
            </Col>

            <Col sm={12}>
              <h4>Mainly Used Tech</h4>
              <ul className="tech">
                {mainlyUsedTechnologies.map(
                  (item: MainlyUsedTech, index: number) => (
                    <Row key={index}>
                      <li className="tech-item d-flex flex-column justify-content-center align-items-center">
                        <span className="tech-text">{item.name} </span>
                        <img
                          className="tech-image "
                          src={item.img}
                          alt="Tech Image"
                        />
                      </li>
                    </Row>
                  )
                )}
              </ul>
            </Col>
            <Row className="row-gap-4 shadow-lg">
              {imgUrl.map((item: string, i: number) => (
                <Col xxl={3} xl={3} lg={4} md={6} key={i}>
                  <img
                    src={item}
                    alt="Project Image"
                    className="custom-shadow"
                  />
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

export default ProjectsDetail;
