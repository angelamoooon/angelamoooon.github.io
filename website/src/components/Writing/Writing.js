import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./WritingCards";
import Particle from "../Particle";
import ProgrammingALife from "../../Assets/images/programming-a-life.jpg";
import FromPeachesToSausageLinks from "../../Assets/images/from-peaches-to-sausage-links.jpg";
import WritingInRed from "../../Assets/images/writing-in-red.jpg";
// import { Link } from "react-router-dom"

function Writing() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="charcoal">Writing </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my writing pieces.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProgrammingALife}
              isEssay={true}
              title="Programming A Life"
              description="A creative writing essay I wrote in senior year of college that explores career, religion, and the illusion of choice."
              link="/EssayPage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FromPeachesToSausageLinks}
              isEssay={true}
              title="From Peaches to Sausage Links"
              description="A piece about growing up and a tribute to the one constant in my life--my mother."
              link="/Essays/EssayPage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WritingInRed}
              isEssay={true}
              title="Writing in Red"
              description="An essay about the loss of a friend and an object that took on a new meaning."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={bitsOfCode}
              isEssay={false}
              title="New Title"
              description="New Description"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={suicide}
              isEssay={false}
              title="New Title"
              description="New Description"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={emotion}
              isEssay={false}
              title="New Title"
              description="New Description"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Writing;