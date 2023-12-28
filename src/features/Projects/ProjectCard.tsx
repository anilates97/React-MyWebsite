import React from "react";
import { Col } from "react-bootstrap";

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
};

function ProjectCard({ title, description, imgUrl }: ProjectCardProps) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
