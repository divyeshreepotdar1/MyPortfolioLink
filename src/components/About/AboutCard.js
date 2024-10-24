import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  I excel in building dynamic and user-friendly interfaces using 
  <span className="purple"> React</span>, 
  <span className="purple"> Redux</span>, and 
  <span className="purple"> JavaScript</span>. On the backend, I’ve developed secure 
  <span className="purple"> RESTful APIs</span> with 
  <span className="purple"> Node.js</span> and 
  <span className="purple"> Express</span>, integrating 
  <span className="purple"> JWT authentication</span> and databases like 
  <span className="purple"> MySQL</span> and 
  <span className="purple"> MongoDB</span>. I’m also experienced with 
  <span className="purple"> DevOps tools</span> like 
  <span className="purple"> Docker</span> and 
  <span className="purple"> Kubernetes</span>, ensuring optimized performance and scalability. Additionally, I’ve integrated 
  <span className="purple"> machine learning models</span> using 
  <span className="purple"> Flask</span> with 
  <span className="purple"> PyTorch</span> and 
  <span className="purple"> TensorFlow</span>. I thrive in fast-paced, 
  <span className="purple"> Agile environments</span>, collaborating effectively to solve complex challenges and deliver high-quality results.
</p>


          

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
