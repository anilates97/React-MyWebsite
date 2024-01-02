import React, { useEffect } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";

import TrackVisibility from "react-on-screen";
import { projects } from "../ProjectData/ProjectData";
import { Element } from "react-scroll";
import { useLocation } from "react-router-dom";

function Projects() {
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    const projectSection = document.getElementById("skills");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });

      window.scrollTo({
        top: state?.isDetailToProjects
          ? projectSection.offsetTop + 500
          : state?.isDetailToSkills
          ? projectSection.offsetTop - 100
          : projectSection.offsetTop - 1000,
        behavior: "smooth",
      });
    }
  }, [state?.isDetailToProjects, state?.isDetailToSkills]);
  return (
    <section className="project" id="project">
      <Element name="project">
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInRight" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      Here, you'll find a collection of projects I've undertaken
                      both during my leisure time and when required. The
                      portfolio showcases a total of 6 projects, consisting of 4
                      in React and 2 in Flutter.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content align-items-center"
                  id="#pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Page 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Page 2</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Coming Soon..</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp2} className="background-image-right" alt="" />
      </Element>
    </section>
  );
}

export default Projects;
