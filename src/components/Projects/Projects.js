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
                <li>Developed responsive and dynamic user interfaces using React, Redux, HTML5, and CSS3, ensuring a seamless and cross-browser compatible experience.</li>
                <li>Managed complex state with Redux and handled asynchronous operations using Redux Thunk to efficiently manage real-time security logs and alerts.</li>
                <li>Built and integrated secure RESTful APIs using Node.js and Express.js for user authentication and log management.</li>
                <li>Designed client-side routing with React Router to enable smooth navigation and dynamic content rendering within the application.</li>
                <li>Conducted unit and integration testing using Jest and React Testing Library to ensure code quality and reliability.</li>
                <li>Optimized application performance by leveraging Webpack and Babel, reducing load times and enhancing overall efficiency.</li>
                <li>Deployed the platform on AWS using EC2 instances for scalable compute resources and AWS RDS for managing the MySQL database with automated backups and high availability.</li>
                <li>Containerized the application using Docker, creating isolated environments for the Node.js backend and React frontend, enabling easier scalability and management.</li>
                <li>Orchestrated the platform’s deployment using Kubernetes, managing multiple containers to ensure high availability, load balancing, and automatic scaling.</li>
                <li>Created Helm charts to automate and streamline deployments across development, test, and production environments within Kubernetes.</li>
                <li>Built a CI/CD pipeline using Jenkins integrated with Docker and Kubernetes, automating testing, building, and deployment processes for continuous integration and delivery.</li>
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
                <li>Developed a comprehensive data visualization interface using HTML5, CSS3, JavaScript, React, and Redux, significantly enhancing user experience. Addressed performance issues by optimizing rendering and state management.</li>
                <li>Implemented React Router for seamless client-side navigation, ensuring a smooth and dynamic user experience across different sections of the platform.</li>
                <li>Built RESTful API endpoints with Node.js and Express, focusing on user authentication, data collection, and reporting. Integrated JWT authentication and Socket.IO for real-time communication, ensuring secure and efficient data transactions.</li>
                <li>Designed and implemented modules for collecting real-time environmental data from sensors, IoT devices, and external APIs. Utilized MongoDB for data storage and TypeScript for type safety.</li>
                <li>Conducted unit and integration tests using JEST and Postman to ensure system reliability and cohesion between frontend and backend components.</li>
                <li>Assisted in deploying the platform on AWS, configured database instances using MongoDB and MySQL, and set up CI/CD pipelines using Docker and Kubernetes for seamless integration and delivery.</li>
                <li>Integrated Mapbox API for environmental mapping, displaying sensor locations and trends with spatial analysis tools.</li>
                <li>Managed collaboration and version control using Git/GitHub, ensuring efficient code management.</li>
                <li>Worked in an Agile environment, contributing to daily stand-ups, sprint planning, and cross-team collaboration.</li>
                <li>Encountered performance challenges when handling large datasets and real-time data processing. Addressed these by optimizing the application architecture and implementing efficient state management techniques.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
