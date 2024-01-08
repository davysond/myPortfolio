import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import domainModelProject from "../../Assets/Projects/domainModelProject.jpg";
import employeeManagement from "../../Assets/Projects/employeeManagement.jpg";
import gitHubProfileFinder from "../../Assets/Projects/gitHubProfileFinder.jpg";
import microserviceMail from "../../Assets/Projects/microserviceMail.jpg";
import musicPlayerProject from "../../Assets/Projects/musicPlayerProject.jpg";
import torrentFiltering from "../../Assets/Projects/torrentFiltering.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={domainModelProject}
              isBlog={false}
              title="Domain Model Project"
              description="Domain Model developed in the Java language, with the help of the Spring Boot framework, for study and learning purposes."
              ghLink="https://github.com/davysond/domain-model-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeeManagement}
              isBlog={false}
              title="Employee Management"
              description="Repository intended for the design of a RESTful API for employee control, developed in Java, using the Spring Boot framework, and the PostgreSQL DBMS."
              ghLink="https://github.com/davysond/employeeManagement"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microserviceMail}
              isBlog={false}
              title="Microservice Mail"
              description="Repository intended for the design of an email provider microservice, developed in Java, using the Spring Boot framework, and the PostgreSQL DBMS."
              ghLink="https://github.com/davysond/microserviceMail"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={torrentFiltering}
              isBlog={false}
              title="Extension For Torrent Filtering"
              description="Repository for a small extension developed with JavaScript for Google Chrome, which allows you to filter reliable results on the torrent website The Pirate Bay, one of the best known available."
              ghLink="https://github.com/davysond/extensionForTorrentFiltering"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitHubProfileFinder}
              isBlog={false}
              title="GitHub Profile Finder"
              description="GitHub profile searcher, building via the developer's own API."
              ghLink="https://github.com/davysond/github-profile-finder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicPlayerProject}
              isBlog={false}
              title="Music Player Project"
              description="A simple music player using HTML, CSS and JavaScript."
              ghLink="https://github.com/davysond/musicplayer-project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
