import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Home2() {
  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <Row className="contact">
          <Col md={3} className="contact-info">
            <h2>Email</h2>
            <p>
              <a href="mailto:jobdivya24@gmail.com">jobdivya24@gmail.com</a>
            </p>
          </Col>
          <Col md={3} className="contact-info">
            <h2>Phone</h2>
            <p>+1 646-666-7525 </p>
          </Col>
          <Col md={3} className="contact-info">
            <h2>Location</h2>
            <p>United States</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
