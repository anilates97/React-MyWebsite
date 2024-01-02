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
};

function ProjectCard({
  title,
  type,
  imgUrl,
  id,
  description,
  mainlyUsedTechnologies,
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
  return (
    <Col sm={12} md={6} lg={4}>
      <button
        className="proj-imgbx"
        onClick={() =>
          navigate(`/projectDetail/${id}`, {
            replace: true,
            state: { propCard, isDetailHome: false },
          })
        }
      >
        <img src={imgUrl[0]} alt="" />
        <div className="proj-txtx">
          <h4 className="text-xs">{title}</h4>
          <span>{type}</span>
        </div>
      </button>
    </Col>
  );
}

export default ProjectCard;
