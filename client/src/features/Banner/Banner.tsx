import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import { Link } from "react-scroll";

function HeroIllustration() {
  return (
    <svg
      className="banner-illustration"
      viewBox="0 0 460 460"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="banner-window-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a1019" />
          <stop offset="1" stopColor="#070b12" />
        </linearGradient>
        <radialGradient id="banner-glow" cx="0.72" cy="0.28" r="0.78">
          <stop offset="0" stopColor="rgba(84,199,236,0.18)" />
          <stop offset="1" stopColor="rgba(84,199,236,0)" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="460" height="460" fill="url(#banner-glow)" />

      <rect
        x="30"
        y="60"
        width="400"
        height="340"
        rx="16"
        fill="url(#banner-window-bg)"
        stroke="rgba(84,199,236,0.32)"
        strokeWidth="1"
      />

      <line
        x1="30"
        y1="100"
        x2="430"
        y2="100"
        stroke="rgba(84,199,236,0.18)"
        strokeWidth="1"
      />

      <circle cx="52" cy="80" r="5" fill="rgba(255,122,133,0.5)" />
      <circle cx="70" cy="80" r="5" fill="rgba(255,206,102,0.5)" />
      <circle cx="88" cy="80" r="5" fill="rgba(120,215,162,0.5)" />

      <rect
        x="120"
        y="70"
        width="130"
        height="22"
        rx="5"
        fill="rgba(84,199,236,0.06)"
        stroke="rgba(84,199,236,0.22)"
        strokeWidth="1"
      />
      <text
        x="185"
        y="85"
        textAnchor="middle"
        fill="rgba(224,242,255,0.55)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        Program.cs
      </text>

      {/* Code line 1 */}
      <text
        x="50"
        y="138"
        fill="rgba(132,149,165,0.32)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        1
      </text>
      <rect x="72" y="128" width="80" height="11" rx="3" fill="rgba(84,199,236,0.42)" />
      <rect x="160" y="128" width="46" height="11" rx="3" fill="rgba(224,242,255,0.2)" />

      {/* Code line 2 */}
      <text
        x="50"
        y="170"
        fill="rgba(132,149,165,0.32)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        2
      </text>
      <rect x="72" y="160" width="56" height="11" rx="3" fill="rgba(224,242,255,0.18)" />
      <rect x="136" y="160" width="118" height="11" rx="3" fill="rgba(224,242,255,0.24)" />
      <rect x="262" y="160" width="38" height="11" rx="3" fill="rgba(84,199,236,0.32)" />

      {/* Code line 3 — blank */}
      <text
        x="50"
        y="202"
        fill="rgba(132,149,165,0.32)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        3
      </text>

      {/* Code line 4 */}
      <text
        x="50"
        y="234"
        fill="rgba(132,149,165,0.32)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        4
      </text>
      <rect x="92" y="224" width="68" height="11" rx="3" fill="rgba(224,242,255,0.18)" />
      <rect x="168" y="224" width="100" height="11" rx="3" fill="rgba(224,242,255,0.14)" />

      {/* Code line 5 */}
      <text
        x="50"
        y="266"
        fill="rgba(132,149,165,0.32)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        5
      </text>
      <rect x="92" y="256" width="180" height="11" rx="3" fill="rgba(224,242,255,0.16)" />

      {/* Active line 6 — highlighted */}
      <rect className="banner-illustration__active" x="30" y="282" width="400" height="22" fill="rgba(84,199,236,0.06)" />
      <text
        x="50"
        y="298"
        fill="rgba(84,199,236,0.65)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        6
      </text>
      <rect x="72" y="288" width="60" height="11" rx="3" fill="rgba(84,199,236,0.5)" />
      <rect x="140" y="288" width="84" height="11" rx="3" fill="rgba(224,242,255,0.26)" />
      <rect x="232" y="288" width="46" height="11" rx="3" fill="rgba(84,199,236,0.4)" />
      <rect className="banner-illustration__caret" x="284" y="285" width="3" height="17" fill="#54c7ec" />

      {/* Code line 7 */}
      <text
        x="50"
        y="330"
        fill="rgba(132,149,165,0.32)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        7
      </text>
      <rect x="72" y="320" width="42" height="11" rx="3" fill="rgba(224,242,255,0.18)" />

      {/* Code line 8 */}
      <text
        x="50"
        y="362"
        fill="rgba(132,149,165,0.32)"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        8
      </text>
      <rect x="92" y="352" width="38" height="11" rx="3" fill="rgba(224,242,255,0.16)" />

      {/* Status bar */}
      <line
        x1="30"
        y1="378"
        x2="430"
        y2="378"
        stroke="rgba(84,199,236,0.18)"
        strokeWidth="1"
      />
      <circle className="banner-illustration__status" cx="50" cy="390" r="3" fill="rgba(120,215,162,0.85)" />
      <text
        x="60"
        y="394"
        fill="rgba(224,242,255,0.42)"
        fontSize="10"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        .NET 10
      </text>
      <text
        x="410"
        y="394"
        textAnchor="end"
        fill="rgba(224,242,255,0.42)"
        fontSize="10"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        UTF-8
      </text>
    </svg>
  );
}

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeInLeft">
                  <span className="tagline">PORTFOLIO</span>
                  <h1>
                    {`Hi I'm Anıl Ateş `}
                    <span className="role-static">.NET Developer</span>
                  </h1>
                  <p>
                    Backend-focused full-stack developer working with
                    ASP.NET Core MVC, React and SQL Server on web and
                    mobile projects.
                  </p>
                  <div className="banner__status" role="status">
                    <span className="banner__status-dot" aria-hidden="true" />
                    <span>Open to junior .NET opportunities</span>
                  </div>
                  <div className="banner__cta-group">
                    <Link className="link" to="project" offset={-100}>
                      <button>
                        View Projects <ArrowRightCircle size={25} />
                      </button>
                    </Link>
                    <Link className="link" to="connect" offset={-175}>
                      <button className="banner__cta--secondary">
                        Contact Me
                      </button>
                    </Link>
                  </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <HeroIllustration />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
