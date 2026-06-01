import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export type MainlyUsedTech = {
  name: string;
  img: string;
};

type ProjectCardProps = {
  id: number;
  title: string;
  type: string;
  imgUrl: string[];
  description: string;
  mainlyUsedTechnologies: MainlyUsedTech[];
  accent?: string;
  cardImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  cardTechs?: string[];
  cardHoverTechs?: string[];
};

function ProjectCard({
  title,
  type,
  imgUrl,
  id,
  description,
  mainlyUsedTechnologies,
  accent,
  cardImage,
  category,
  cardTechs,
  cardHoverTechs,
}: ProjectCardProps) {
  const propCard = {
    title,
    type,
    description,
    mainlyUsedTechnologies,
    imgUrl,
    id,
  };
  const navigate = useNavigate();
  const cardStyle = accent
    ? ({ "--card-accent": accent } as React.CSSProperties)
    : undefined;
  const thumb = cardImage ?? imgUrl[0];

  const normalize = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9+#.]+/g, " ")
      .trim();
  const normalizedType = normalize(type);
  const featuredNames = (
    cardHoverTechs ??
    cardTechs ??
    mainlyUsedTechnologies.map((t) => t.name)
  )
    .filter((name) => !normalizedType.includes(normalize(name)))
    .slice(0, 3);

  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
      <button
        type="button"
        className="proj-imgbx"
        style={cardStyle}
        aria-label={`View ${title} project details`}
        onClick={() =>
          navigate(`/projectDetail/${id}`, {
            replace: true,
            state: { propCard, isDetailHome: false },
          })
        }
      >
        <div className="proj-media">
          {category && <span className="proj-category">{category}</span>}
          <img src={thumb} alt={`${title} preview`} loading="lazy" />
        </div>
        <div className="proj-txtx">
          <h4 className="text-xs">{title}</h4>
          <span className="proj-type">{type}</span>
          {featuredNames.length > 0 && (
            <span className="proj-tech-line" aria-hidden="true">
              {featuredNames.join(" \u00b7 ")}
            </span>
          )}
        </div>
      </button>
    </Col>
  );
}

export default ProjectCard;
