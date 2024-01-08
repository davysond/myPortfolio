import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Davyson Douglas </span>
            from <span className="purple"> Campina Grande, Paraiba - Brasil.</span>
            <br />
            I am currently graduating in Computer Science from the Federal University of Campina Grande, UFCG.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Getting directly involved with sports, whether practicing, watching or commenting on them (soccer, football, basketball and baseball).
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Davyson D.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
