import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="about-section">
      <Row><Col><h1>Experience</h1></Col></Row>
      <Row><Col><h2>Microsoft</h2></Col><Col><h3>July 2020 - Present</h3></Col></Row>
      <Row><Col><p>Currently working as a software engineer on the Assets and Projects team
        within Cloud and AI's Commerce and Ecosystems.</p></Col><Col><h3>Software Engineer</h3></Col></Row>
      <Row><Col><h2>DeLille Cellars</h2></Col><Col><h3>Tasting Room Associate</h3></Col></Row>
    </Container>
  );
}

export default About;