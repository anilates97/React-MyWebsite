import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import RevealOnce from "../../components/RevealOnce";

const skillGroups = [
  {
    title: "Backend",
    focus: "Server-side development, API structure, data access patterns",
    skills: [
      "ASP.NET Core MVC",
      "C#",
      "RESTful APIs",
      "Web API",
      "Entity Framework Core",
      "LINQ",
    ],
  },
  {
    title: "Frontend",
    focus: "Responsive interfaces, component-based UI, modern styling",
    skills: ["React", "Vue","JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Database",
    focus: "Relational and document data, cloud backend services",
    skills: ["SQL Server", "MongoDB", "Supabase","Firebase"],
  },
  {
    title: "Tools",
    focus: "Version control, containers, background jobs, AI-assisted delivery",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Hangfire",
      "AI-Assisted Development",
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
                 Backend-focused full stack developer experienced in ASP.NET Core MVC, REST APIs,
                 SQL Server and React development. I enjoy building practical and scalable web applications with clean backend architecture, modern UI principles and database-driven systems.

                  My projects include financial management systems,
                  logistics CMS platforms, reservation systems and portfolio applications. I also actively use AI-assisted development workflows to accelerate prototyping, debugging and feature development.
                </p>
                <div className="skill-grid" aria-label="Technical skills">
                  {skillGroups.map((group, groupIndex) => (
                    <article className="skill-card" key={group.title}>
                      <div className="skill-card__header">
                        <span>{String(groupIndex + 1).padStart(2, "0")}</span>
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
