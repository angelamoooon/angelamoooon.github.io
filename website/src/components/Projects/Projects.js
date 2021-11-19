import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="charcoal">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="RecruitMe"
              description="Database for keeping track of applications for job hunting geared toward University students."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project Title"
              description="Project Description Here"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project Title"
              description="Project Description Here"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;