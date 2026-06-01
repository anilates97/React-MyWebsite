import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
                    Selected projects covering financial reporting, CMS
                    workflows, real estate listings, ticket reservation
                    and mobile app interfaces.
                  </p>
                </div>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
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
