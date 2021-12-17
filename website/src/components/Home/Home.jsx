import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../Assets/images/home-main.jpg";
import Particle from "../Particle";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import About from "./About";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Angela Moon</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={ProfilePic} alt="profile pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
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
                    I graduated from Duke University in May 2020 in the middle of the pandemic and started my career
                     as a software engineer in my room working remotely for Microsoft.
                    I know how to code in
                    <b className="charcoal"> C++, Java and Python </b>
                        and speak 
                    <b className="charcoal"> English, Korean, and a bit of Spanish. </b>
                <br />
                <br />
                {/* My interest is in  &nbsp;
                    <b className="charcoal">building groundbreaking technologies</b>, 
                    <b className="charcoal"> artificial intelligence</b>, and most of all
                    <b className="charcoal"> having fun</b>! */}
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
    </section>
  );
}

export default Home;