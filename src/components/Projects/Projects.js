import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Projects() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="project-heading">
          My Work <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few experiences I've gained over the years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="work-card">
            <div className="work-card-view">
              <h4>System Soft Technologies</h4>
              <h5>Project Name: Elysium Analytics Web Platform</h5>
              <p>Duration: Jan 2023 – Present</p>
              <p>Location: Herndon, VA</p>
             
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul>
                <li>Developed responsive and dynamic user interfaces using React JS, React Native, Redux, HTML, and CSS, ensuring a seamless and cross-browser compatible experience across web and mobile.</li>
                <li>Managed complex state with Redux and handled asynchronous operations using Redux Thunk to efficiently manage real-time security logs and alerts for both platforms.</li>
                <li>Built and integrated secure RESTful APIs using Node.js and Express.js for user authentication and log management, supporting data transactions for web and mobile.</li>
                <li>Designed client-side routing with React Router for web and React Navigation for mobile, enabling smooth navigation and dynamic content rendering within the applications.</li>
                <li>Conducted unit and integration testing using Jest and React Testing Library for web, and Detox for mobile, ensuring code quality and reliability across platforms.</li>
                <li>Optimized application performance by leveraging Webpack and Babel for web, and Metro bundler for mobile, reducing load times and enhancing overall efficiency.</li>
                <li>Deployed the platform on AWS using EC2 instances for scalable compute resources and AWS RDS for managing the MySQL database with automated backups and high availability.</li>
                <li>Containerized the application using Docker, creating isolated environments for the Node.js backend and both the React and React Native frontends, enabling easier scalability and management.</li>
                <li>Orchestrated the platform’s deployment using Kubernetes, managing multiple containers to ensure high availability, load balancing, and automatic scaling across web and mobile.</li>
                <li>Created Helm charts to automate and streamline deployments across development, test, and production environments within Kubernetes.</li>
                <li>Built a CI/CD pipeline using Jenkins integrated with Docker and Kubernetes, automating testing, building, and deployment processes for continuous integration and delivery across platforms.</li>
                <li>Applied PyTorch, TensorFlow, and Scikit-learn to develop machine learning models for analyzing data patterns and enhancing platform functionality.</li>
                <li>Integrated machine learning models via Flask, using NumPy and Pandas for data preprocessing and Matplotlib for data visualization of threat trends.</li>
                <li>Collaborated in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives, ensuring timely delivery of features and improvements.</li>
                <li>Managed version control using Git, handling feature branches and pull requests for efficient collaboration and maintaining a clean codebase.</li>
              </ul>
            </div>
          </Col>

          <Col md={12} className="work-card">
            <div className="work-card-view">
              <h4>Excep Technology Pvt. Ltd., India</h4>
              <h5>Project Name: EcoScape Environmental Monitoring Platform</h5>
              <p>Duration: Jan 2018 - August 2022</p>
              <p>Location: India</p>
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul>
                <li>Developed and maintained EcoScape as a cross-platform application using React.js for web and React Native for mobile, enabling consistent user experiences and streamlined code reuse.</li>
                <li>Built responsive data visualization interfaces with HTML5, CSS3, JavaScript, React.js, and Redux for web, and React Native for mobile, optimizing performance and ensuring smooth interaction on all devices.</li>
                <li>Used React Router for web and React Navigation for mobile, delivering seamless, dynamic navigation tailored to each platform.</li>
                <li>Created RESTful API endpoints using Node.js and Express, managing secure data transactions, real-time data collection, and user authentication, with JWT and Socket.IO for real-time communication supporting both web and mobile platforms.</li>
                <li>Designed modules to capture real-time environmental data from IoT sensors and external APIs, using MongoDB and MySQL for scalable data storage, and TypeScript to enforce type safety across the codebases.</li>
                <li>Integrated Mapbox API on both platforms (web with Mapbox and mobile with React Native Mapbox GL) to visualize environmental data, track sensor locations, and provide users with comprehensive spatial insights.</li>
                <li>Addressed performance challenges by optimizing architecture, leveraging Redux for efficient state management across web and mobile, using Webpack and Babel for web to reduce load times, and Metro bundler in React Native to enhance app startup times and minimize resource usage.</li>
                <li>Conducted unit and integration testing with Jest and Postman across both platforms, using Detox for end-to-end testing on mobile, following TDD practices to ensure high reliability and maintainability.</li>
                <li>Deployed backend services on AWS with Docker and Kubernetes, established CI/CD pipelines for web and mobile, and automated mobile build processes with App Center to enable efficient, continuous delivery.</li>
                <li>Utilized Git for version control, collaborating effectively in an Agile environment with cross-functional teams to drive iterative improvements, ensure alignment, and prioritize user needs.</li>              
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
