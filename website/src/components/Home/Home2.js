import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Tilt from "react-parallax-tilt";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import About from "./About";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who Am <span className="charcoal">I</span>?
            </h1>
            <br />
            <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
                My name is <span className="charcoal">Angela Moon </span>
                and I'm from <span className="charcoal"> Seoul, South Korea, Henderson, Nevada, 
                and Mukilteo, Washington</span>.
                <br />I am currently working as a software engineer at <span className="charcoal">Microsoft </span>
                  and working part-time as a Tasting Room Associate at <span className="charcoal">DeLille Cellars</span>.
                  Apart from coding, I like to write essays, travel, and hike!
                  I graduated from Duke University in May 2020 in the middle of the pandemic.
                  I started my career as a software engineer in my room working remotely for Microsoft.
                  I know how to code in
                <b className="charcoal"> C++, Java and Python </b>
                    and speak 
                <b className="charcoal"> English, Korean, and a bit of Spanish. </b>
              <br />
              <br />
              My interest is in  &nbsp;
                <b className="charcoal">building groundbreaking technologies</b>, 
                <b className="charcoal"> artificial intelligence</b>, and most of all
                <b className="charcoal"> having fun</b>!
                </p>
            </blockquote>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <About />
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's <span className="charcoal">Connect!</span></h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/AngelaaaMooon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/angeladmoon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/angelamoon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;