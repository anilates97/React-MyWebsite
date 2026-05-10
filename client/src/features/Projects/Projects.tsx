import React, { useEffect } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";

import { projects } from "../ProjectData/ProjectData";
import { Element } from "react-scroll";
import { useLocation } from "react-router-dom";
import RevealOnce from "../../components/RevealOnce";

function Projects() {
  const location = useLocation();
  const state = location.state as
    | {
        isDetailToSkills?: boolean;
        isDetailToProjects?: boolean;
      }
    | undefined;

  useEffect(() => {
    if (!state?.isDetailToProjects && !state?.isDetailToSkills) {
      return;
    }

    const targetId = state.isDetailToProjects ? "project" : "skills";
    const section = document.getElementById(targetId);

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
  }, [state?.isDetailToProjects, state?.isDetailToSkills]);
  return (
    <section className="project" id="project">
      <Element name="project">
        <Container>
          <RevealOnce className="project-bx" direction="right">
            <Row>
              <Col>
                <div>
                  <h2>Projects</h2>
                  <p>
                    A collection of backend, full stack and frontend projects focused on practical application development,
                    scalable web systems and modern UI/UX experiences.

                    The portfolio includes financial management systems, logistics CMS platforms, ticket reservation applications,
                    real estate platforms and modern web-based solutions built with ASP.NET Core MVC, React, SQL Server and modern development workflows.
                  </p>
                </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content align-items-center"
                    id="#pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Featured Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Archive</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map(
                          (project, index) =>
                            index < 6 && <ProjectCard key={index} {...project} />
                        )}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects.map(
                          (project, index) =>
                            index >= 6 && <ProjectCard key={index} {...project} />
                        )}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          </RevealOnce>
        </Container>
        <img src={colorSharp2} className="background-image-right" alt="" />
      </Element>
    </section>
  );
}

export default Projects;
