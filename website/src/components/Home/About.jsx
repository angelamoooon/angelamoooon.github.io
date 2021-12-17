import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="about-section">
      <Row><Col><h1>Education</h1></Col></Row>
      <Row><Col><h2>Duke University</h2></Col><Col><h3>August 2016 - May 2020</h3></Col></Row>
      <Row><Col><h2>Bachelor of Science<br/>Minor in Economics<br/>Certificate in Information Science + Studies</h2></Col><Col><h3>Durham, NC</h3></Col></Row>
      <Row><Col><p>Relevant Coursework:</p></Col></Row>
      <br />
      <Row><Col><h2>Kamiak High School</h2></Col><Col><h3>September 2012 - May 2016</h3></Col></Row>
      <Row><Col><h2>High School Diploma</h2></Col><Col><h3>Mukilteo, WA</h3></Col></Row>
      <br />
      <Row><Col><h1>Experience</h1></Col></Row>
      <Row><Col><h2>Microsoft</h2></Col><Col><h3>July 2020 - Present</h3></Col></Row>
      <Row><Col><h2>Software Engineer</h2></Col><Col><h3>Redmond, WA</h3></Col></Row>
      <Row><Col><p>Currently working as a software engineer on the Assets and Projects team
        within Cloud and AI's Commerce and Ecosystems.</p></Col></Row>
      <br />
      <Row><Col><h2>DeLille Cellars</h2></Col><Col><h3>June 2021 - Present</h3></Col></Row>
      <Row><Col><h2>Tasting Room Associate</h2></Col><Col><h3>Woodinville, WA</h3></Col></Row>
      <Row><Col><p>Serving wine at the DeLille Cellars Tasting Room in 
        Woodinville, WA.</p></Col></Row>
      <br />
      <Row><Col><h2>Microsoft</h2></Col><Col><h3>July 2020 - Present</h3></Col></Row>
      <Row><Col><h2>Software Engineering Intern</h2></Col><Col><h3>Redmond, WA</h3></Col></Row>
      <Row><Col><p>Worked as a software engineering intern on the Assets and Projects team
        within Cloud and AI's Commerce and Ecosystems.</p></Col></Row>

    </Container>
  );
}

export default About;