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
            <Col sm={5} md={6} lg={8}>
              <h2>{title}</h2>
              <p>{description}</p>
            </Col>
            <Col sm={3}>
              <h4>Mainly Used Tech</h4>
              <ul className="tech">
                {mainlyUsedTechnologies.map(
                  (item: MainlyUsedTech, index: number) => (
                    <Row key={index}>
                      <li className="tech-item d-flex gap-4">
                        <span className="tech-text">
                          {item.name}{" "}
                          <img
                            className="tech-image "
                            src={item.img}
                            alt="Tech Image"
                          />
                        </span>
                      </li>
                    </Row>
                  )
                )}
              </ul>
            </Col>

            <Row className="row-gap-4 shadow-lg">
              {imgUrl.map((item: string, i: number) => (
                <Col sm={3} key={i}>
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
