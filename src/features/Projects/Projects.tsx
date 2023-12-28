import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";

import movieScience from "../../assets/img/MovieScience/MovieScience.png";

import projBitirme from "../../assets/img/bitirmeP/BitirmeP.png";
import adoBilet from "../../assets/img/adoBilet/AdoBilet.png";
import weatherFlow from "../../assets/img/weatherFlow/WeatherFlow.png";
import eCommerce from "../../assets/img/E-commerce/E-commerce.png";
import fastPizza from "../../assets/img/fastPizzaUdemy/fastPizza.png";

function Projects() {
  const projects = [
    {
      title: "AdoBilet & Midlevel Bootcamp",
      description: "Design & Full Stack Web Development",
      imgUrl: adoBilet,
    },
    {
      title: "Weather Flow & Freelance",
      description: "Design & Web Development",
      imgUrl: weatherFlow,
    },
    {
      title: "E-commerce & Freelance",
      description: "Design & MERN Stack Development",
      imgUrl: eCommerce,
    },
    {
      title: "Fast Pizza & Udemy",
      description: "Design & Web Development",
      imgUrl: fastPizza,
    },

    {
      title: "Movie Science",
      description: "Design & Mobile Development",
      imgUrl: movieScience,
    },

    {
      title: "Library Simulation & Graduation",
      description: "Design & Mobile Development",
      imgUrl: projBitirme,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here, you'll find a collection of projects I've undertaken both
              during my leisure time and when required. The portfolio showcases
              a total of 6 projects, consisting of 3 in React and 2 in Flutter.
            </p>
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
    </section>
  );
}

export default Projects;
