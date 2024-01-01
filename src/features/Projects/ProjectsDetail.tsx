import React, { useEffect } from "react";
import CustomNavBar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { MainlyUsedTech } from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCoverflow } from "swiper/modules";
import { useSwiper } from "swiper/react";
import navIcon1 from "../../assets/img/contact-img.svg";

import "swiper/css";

function ProjectsDetail() {
  const location = useLocation();
  const swiper = useSwiper();
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
            {imgUrl.length > 1 ? (
              <Swiper
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  150: {
                    slidesPerView: 1,
                  },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                spaceBetween={75}
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectCoverflow,
                ]}
                effect="coverflow"
                grabCursor
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 250,
                  modifier: 1,
                  slideShadows: true,
                }}
              >
                {imgUrl.map((item: string, i: number) => (
                  <SwiperSlide key={i}>
                    <div className="image-container ">
                      <img src={item} alt="Project Image" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="image-container ">
                <img src={imgUrl[0]} alt="Project Image" />
              </div>
            )}
          </Row>
        </Container>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

export default ProjectsDetail;
