import React, { useCallback, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ArrowRightCircle } from "react-bootstrap-icons";

import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import bgAnimation from "../../assets/img/bgAnimate.json";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const bannerRef = useRef(null);

  const options = {
    animationData: bgAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = useCallback(() => {
    const toRotate = ["Web Developer", "Mobile Developer"];
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(250);
    }
  }, [isDeleting, loopNum, text.length]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <span className="tagline">Welcome to my page</span>
                  <h1>
                    {`Hi I'm Anıl Ateş `} <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am where I call myself a full stack developer. Come take a
                    look at my inner world. Let's explore together.
                  </p>
                  <Link className="link" to="connect" offset={-175}>
                    <button>
                      Contact Me <ArrowRightCircle size={25} />
                    </button>
                  </Link>
                </div>
              )}
            </TrackVisibility>
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
