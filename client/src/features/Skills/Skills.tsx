import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import colorSharp from "../../assets/img/color-sharp.png";
import Svg from "./Svg";
import { Element } from "react-scroll";

function Skills() {
  const data = [
    {
      svgText: "React",
      deg: "%65",
      degValue: 0.65,
    },
    {
      svgText: "Tailwind",
      deg: "%78",
      degValue: 0.78,
    },
    {
      svgText: "React Native",
      deg: "%51",
      degValue: 0.51,
    },
    {
      svgText: "Javascript",
      deg: "%65",
      degValue: 0.65,
    },
    {
      svgText: "HTML",
      deg: "%100",
      degValue: 1,
    },
    {
      svgText: "CSS",
      deg: "%70",
      degValue: 0.7,
    },
    {
      svgText: "SASS",
      deg: "%70",
      degValue: 0.7,
    },
    {
      svgText: "SQL",
      deg: "%48",
      degValue: 0.48,
    },
    {
      svgText: "NodeJS",
      deg: "%52",
      degValue: 0.52,
    },
    {
      svgText: "MongoDB",
      deg: "%43",
      degValue: 0.43,
    },
  ];

  return (
    <section className="skill" id="skills">
      <Element name="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  With a passion for coding and a keen interest in the world of
                  software, I've cultivated a broad spectrum of technical
                  skills. I possess a strong knowledge base in areas like web
                  development, app design, and database management. Leveraging
                  my ability to proficiently work with both front-end and
                  back-end technologies, I strive to create user-friendly and
                  functional solutions. My experiences in bringing innovative
                  ideas to life provide me with a unique perspective for each
                  project. Prioritizing continuous learning and staying updated
                  on tech trends, I aim to continually advance as a professional
                  in this ever-evolving field.
                </p>
                <Svg svgData={data} />
              </div>
            </Col>
          </Row>
        </Container>
      </Element>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
}

export default Skills;
