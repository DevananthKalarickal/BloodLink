import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // Move inside the component

  const handleLearnMoreClick = () => {
    navigate('/Readmore');
    window.scrollTo(0, 0); // Navigate to the "Read More" page
  };

  return (
    <div
      className="about-section"
      id="about-section"
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Image Column */}
          <Col xs={12} md={6} className="order-2 order-md-1 mb-4 mb-md-0">
            <div
              className="background-image"
              style={{
                width: '100%',
                height: '500px', // Fixed height for all screens
                backgroundImage: `url("https://cdni.iconscout.com/illustration/premium/thumb/blood-donation-drive-5526362-4620408.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              }}
            ></div>
          </Col>

          {/* Text Column */}
          <Col xs={12} md={6} className="order-1 order-md-2">
            <div
              style={{
                color: '#333',
                padding: '15px',
                textAlign: 'center', // Center text on small screens
              }}
            >
              <h2
                className="display-4 mb-4"
                style={{
                  fontWeight: 'bold',
                  color: '#1a1a1a',
                }}
              >
                About Us
              </h2>
              <p
                className="lead mb-4"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                }}
              >
                Our mission is to provide the highest quality care for all,
                ensuring a better and healthier future for our community. We
                believe in the power of collaboration, innovation, and a deep
                commitment to patient care.
              </p>
              <Button
                variant="danger"
                size="lg"
                style={{
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                }}
                onClick={handleLearnMoreClick}
              >
                Read More →
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
