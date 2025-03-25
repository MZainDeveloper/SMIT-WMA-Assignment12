import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo6 from "../images/logo6.png";

const FeaturedInSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo6];

  return (
    <section id="feature">
      <Container className="py-5">
        <Row>
          <div className="section-header text-center mb-5">
            <h2 className="text-capitalize m-0">Featured In</h2>
          </div>
        </Row>
        <Row className="d-flex justify-content-between">
          {logos.map((logo, index) => (
            <Col key={index} md={2} className="my-3">
              <div
                role="group"
                aria-label={`Logo ${index + 1}`}
                style={{ width: "158.667px", marginRight: "20px" }}
              >
                <img
                  alt={`Logo ${index + 1}`}
                  src={logo}
                  className="img-fluid"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedInSection;
