import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
 
  DiGit as DiGitLab, // Import GitLab as well
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiRedux,
  SiJquery,
  SiSass,
  SiFlask,
  SiMysql,
  SiFirebase,
  SiWebpack,
  SiBabel,
  SiJest,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiJira,
  SiGithub,
  SiSlack,
  SiBootstrap,
  SiVisualstudiocode, // Ensure this icon is imported
  SiJenkins, // Ensure this icon is imported
  SiMacos, // Ensure this icon is imported
} from "react-icons/si";

function Techstack() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <h2 >Frontend Technologies</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
          <div>HTML5</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
          <div>CSS3</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <div>JavaScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <div>TypeScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <div>React</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
          <div>Redux</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJquery />
          <div>jQuery</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" >
          <SiSass />
          <div >Sass</div>
        </Col>
      </Row>

      <h2 style={{paddingTop:"40px"}}>Backend Technologies</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <div>Node.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask />
          <div>Flask</div>
        </Col>
      </Row>

      <h2 style={{paddingTop:"40px"}}>Database Management</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <div>MySQL</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <div>MongoDB</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
          <div>Firebase</div>
        </Col>
      </Row>

      <h2 style={{paddingTop:"40px"}}>API Development & Integration</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
          <div>Postman</div>
        </Col>
        {/* Add icons for RESTful APIs, JWT Authentication, Socket.IO, AJAX, Axios here */}
      </Row>

      <h2 style={{paddingTop:"40px"}}>Performance & Build Tools</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiWebpack />
          <div>Webpack</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBabel />
          <div>Babel</div>
        </Col>
      </Row>

      <h2 style={{paddingTop:"40px"}}>Testing</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiJest />
          <div>Jest</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
          <div>React Testing Library</div>
        </Col>
        {/* Add icons for Chai, Mocha here */}
      </Row>

      <h2 style={{paddingTop:"40px"}}>DevOps Tools</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiJenkins />
          <div>Jenkins</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
          <div>Docker</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKubernetes />
          <div>Kubernetes</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJira />
          <div>Jira</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
          <div>Slack</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
          <div>GitLab</div>
        </Col>
      </Row>

      <h2 style={{paddingTop:"40px"}}>Machine Learning & Data Science</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPytorch />
          <div>PyTorch</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow />
          <div>TensorFlow</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiScikitlearn />
          <div>Scikit-learn</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNumpy />
          <div>NumPy</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPandas />
          <div>Pandas</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiOpencv />
          <div>OpenCV</div>
        </Col>
      </Row>

      <h2 style={{paddingTop:"40px"}}>Other Software/Resources</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiJira />
          <div>Jira</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
          <div>GitHub</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
          <div>VS Code</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
          <div>Git</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos />
          <div>macOS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
          <div>Bootstrap</div>
        </Col>
      </Row>

      <h2 style={{paddingTop:"40px"}}>Methodologies</h2>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div>Agile</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div>Scrum</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div>Waterfall</div>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
