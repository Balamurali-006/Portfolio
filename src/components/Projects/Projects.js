import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/tiny.jpg";
import emotion from "../../Assets/Projects/equi.jpg";
import editor from "../../Assets/Projects/cogni.png";
import chatify from "../../Assets/Projects/medico.jpg";
import suicide from "../../Assets/Projects/copd.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Mediverse"
              description="Mediverse is a comprehensive AI-driven healthcare platform designed to provide users with medical insights, health monitoring, digital records management, and automated medicine ordering. It integrates AI, IoT, and automation to improve accessibility and efficiency in healthcare."
              ghLink="https://github.com/Rajendran2201/HTH-Hackathon-63"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cogni_Chat"
              description="This is a Streamlit application that allows users to upload multiple PDF documents and interactively chat about the content of those documents using a conversational AI model. The chatbot is designed to process PDF files, extract text from them, and generate embeddings for the text chunks using Hugging Face models. "
              ghLink="https://github.com/Rajendran2201/CogniChat"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TinyToes"
              description="TinyToes is a comprehensive web platform designed to help parents understand and care for their babies using advanced AI technology. It offers features such as baby cry analysis, milestone tracking, expert consultations, and a nanny booking service to provide seamless support to parents."
              ghLink="https://github.com/Rajendran2201/babycare"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="pulmonary-infection-detection"
              description="An application that receives the employee’s respiratory audio as input and the trained model will analyze the audio and output what kind of infection is being affected to the employee."
              ghLink="https://github.com/Rajendran2201/pulmonary-infection-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="EquiShield"
              description="EquiShield is an advanced Gender Bias Detection & Correction System that identifies implicit biases in news headlines and rewrites them with neutral, unbiased alternatives using machine learning, NLP, and AI-based text generation."
              ghLink="https://github.com/Rajendran2201/equishield"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
