import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
};

function ProjectCard({ title, description, imgUrl, id }: ProjectCardProps) {
  const propCard = {
    title,
    description,
    imgUrl,
    id,
  };
  const navigate = useNavigate();
  return (
    <Col sm={6} md={4}>
      <button
        className="proj-imgbx"
        onClick={() =>
          navigate(`/projectDetail/${id}`, {
            replace: true,
            state: { propCard },
          })
        }
      >
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4 className="text-xs">{title}</h4>
          <span>{description}</span>
        </div>
      </button>
    </Col>
  );
}

export default ProjectCard;
