import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import colorSharp from "../../assets/img/color-sharp.png";
import Svg from "./Svg";

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
      svgText: "ExpressJS",
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
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                nam necessitatibus fuga sed porro distinctio alias dolores
                officia impedit suscipit repellendus, accusamus natus facilis
                inventore.
              </p>
              <Svg svgData={data} />
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
}

export default Skills;
