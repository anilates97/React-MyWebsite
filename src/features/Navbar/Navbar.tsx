import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

type CustomNavBarProps = {
  isDetail?: boolean;
};

function CustomNavBar({ isDetail }: CustomNavBarProps) {
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();
  const state = location.state;

  const [scrolled, setScrolled] = useState(
    isDetail
      ? true
      : state?.isDetailToHome
      ? true
      : state?.isisDetailToSkills
      ? true
      : state?.isDetailToProjects
      ? true
      : false
  );
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  // const handleClickHome = () => {
  //   navigate("/", {
  //     state: { isDetailToHome: true },
  //   });

  //   const projectSection = document.getElementById("project");
  //   if (projectSection) {
  //     projectSection.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const handleClickSkills = () => {
    navigate("/", {
      state: { isDetailToSkills: true },
    });
  };

  const handleClickProject = () => {
    navigate("/", {
      state: { isDetailToProjects: true },
    });

    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Link to="home" onClick={() => (isDetail ? navigate("/") : null)}>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" width={120} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="home" onClick={() => (isDetail ? navigate("/") : null)}>
              <Nav.Link
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
            </Link>
            <Link
              to="skills"
              offset={-100}
              onClick={isDetail ? handleClickSkills : () => {}}
            >
              <Nav.Link
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
            </Link>
            <Link
              to="project"
              offset={isDetail ? 500 : -100}
              onClick={isDetail ? handleClickProject : () => {}}
            >
              <Nav.Link
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anilates97/">
                <img src={navIcon1} alt="" />{" "}
              </a>
              <a href="https://github.com/anilates97">
                <img src={navIcon2} alt="" />{" "}
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />{" "}
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
