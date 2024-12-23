import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
  const image = 'https://www.teamhealth.com/wp-content/uploads/2022/06/TH-13654-World-Blood-Donor-Day-Social-Graphics_ForApproval_Blog.jpg'; // Single image

  return (
    <div
      className="banner-container"
      style={{
        position: 'relative',
        minHeight: '100vh', // Ensure the banner takes at least the full height of the screen
        width: '100%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover', // Ensures the image covers the container, might crop depending on aspect ratio
        backgroundPosition: 'center', // Centers the image in the container
        backgroundAttachment: 'fixed', // Keeps the background fixed while scrolling
        transition: 'opacity 1s ease',
      }}
    >
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '100%',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h1
              className="mb-4"
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                lineHeight: '1.2',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
              }}
            >
              Join as a Donor
            </h1>
            <p
              className="lead mb-4"
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              Your contribution can save lives. Join the movement and make a difference today!
            </p>
            <Link to="/register">
              <Button
                variant="outline-light"
                size="lg"
                className="px-4"
                style={{
                  borderRadius: '30px',
                  width: '200px', // Default width for larger screens
                }}
              >
                Get Started
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
