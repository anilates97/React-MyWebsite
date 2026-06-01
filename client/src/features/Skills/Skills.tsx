import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import RevealOnce from "../../components/RevealOnce";

const skillGroups = [
  {
    title: "Backend",
    focus: "Server-side development, API structure, data access patterns",
    skills: [
      "C#",
      "ASP.NET Core MVC",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "RESTful APIs",
      "Hangfire",
      "LINQ",
    ],
  },
  {
    title: "Frontend",
    focus: "Responsive interfaces, component-based UI, modern styling",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Database",
    focus: "Relational and document data, cloud backend services",
    skills: ["SQL Server", "MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "Tools",
    focus: "Version control, containers, developer workflow",
    skills: [
      "Git",
      "GitHub",
      "Docker",
    ],
  },
];

function Skills() {
  return (
    <section className="skill" id="skills">
      <Element name="skills">
        <Container>
          <Row>
            <Col>
              <RevealOnce className="skill-bx">
                <h2>Skills</h2>
                <p>
                  I mostly work on the backend side with ASP.NET Core MVC,
                  REST APIs and SQL Server, paired with React on the
                  frontend. The projects below cover a financial reporting
                  dashboard, a logistics CMS, a real estate platform, a
                  ticket reservation app and two Flutter mobile apps.
                </p>
                <div className="skill-grid" aria-label="Technical skills">
                  {skillGroups.map((group) => (
                    <article className="skill-card" key={group.title}>
                      <div className="skill-card__header">
                        <h3>{group.title}</h3>
                      </div>
                      <p className="skill-card__focus">{group.focus}</p>
                      <div className="skill-card__chips">
                        {group.skills.map((skill) => (
                          <span className="skill-chip" key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </RevealOnce>
            </Col>
          </Row>
        </Container>
      </Element>
    </section>
  );
}

export default Skills;
