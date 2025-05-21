import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Bala Murali</span>, currently pursuing my B.Tech in Artificial Intelligence and Data Science at <span className="purple">Coimbatore Institute of Technology</span>.
            <br />
            <br />
            I'm a passionate frontend developer who loves turning ideas into meaningful digital experiences. I enjoy exploring technologies, solving real-world problems, and making things both useful and beautiful.
            <br />
            Instead of just seeing the overview of a problem, I dive straight into it and focus on finding the root cause to solve it effectively.
            <br />
            <br />
            Outside of development, I'm into:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing user interfaces
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing tech blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tools & ideas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe in building things with purpose and curiosity."{" "}
          </p>
          <footer className="blockquote-footer">Bala Murali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
