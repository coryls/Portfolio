import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi Everyone, I am <span className="purple">Cory Stagg </span>
            from <span className="purple"> New Port Richey, FL.</span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc)
            in Computer Science.
            <br />
            Additionally, I am proficient with algorithms and data structures.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{color: "rgb(155 126 172)"}}>
            "Credit is all about my life!"{" "}
          </p>
          <footer className="blockquote-footer">Cory</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
