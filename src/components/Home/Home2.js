import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: "2.6em"}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Cory is a{" "}
              <i>
                <b className="purple">Full-stack engineer</b>
              </i>{" "}
              with expertise in{" "}
              <i>
                <b className="purple">React, Typescript, Golang and Node.js</b>
              </i>
              .
              <br />
              He is keenly interested in{" "}
              <i>
                <b className="purple">algorithm-level efficiency</b>
              </i>{" "}
              and has experience working both with{" "}
              <i>
                <b className="purple">front-end</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">back-end</b>
              </i>{" "}
              technologies as well as{" "}
              <i>
                <b className="purple">frameworks</b>
              </i>
              . <br />
              Cory is also a competitive programmer who actively participates in
              different online challenges. He loves learning about anything,
              especially if it makes him better at his craft.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/coryls"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cory-stagg-b02247281/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
