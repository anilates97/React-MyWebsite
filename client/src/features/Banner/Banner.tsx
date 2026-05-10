import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useLottie } from "lottie-react";
import bgAnimation from "../../assets/img/bgAnimate.json";
import "animate.css";
import { Link } from "react-scroll";

const roles = [".NET Developer", "Full Stack Developer"];

function Banner() {
  const options = {
    animationData: bgAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeInLeft">
                  <span className="tagline">PORTFOLIO</span>
                  <h1>
                    {`Hi I'm Anıl Ateş `}
                    <span
                      className="role-rotator"
                      aria-label={roles.join(" and ")}
                    >
                      {roles.map((role, index) => (
                        <span
                          className="role-rotator__item"
                          key={role}
                          style={{ animationDelay: `${index * 2.1}s` }}
                        >
                          {role}
                        </span>
                      ))}
                    </span>
                  </h1>
                  <p>
                    Building modern web applications with ASP.NET Core MVC,
                    React, SQL Server and AI-assisted development workflows.
                  </p>
                  <Link className="link" to="connect" offset={-175}>
                    <button>
                      Contact Me <ArrowRightCircle size={25} />
                    </button>
                  </Link>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {View}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
