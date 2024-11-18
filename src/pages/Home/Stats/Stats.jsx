import { FaUsers, FaTrophy } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const Stats = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is greater than 768px
      if (window.innerWidth > 768) {
        const timer = setTimeout(() => setAnimation(true), 500); // Delay the animation start
        return () => clearTimeout(timer);
      } else {
        setAnimation(false); // Disable animation on smaller screens
      }
    };

    // Set the initial state
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const statCardStyle = {
    opacity: animation ? 1 : 1, // Keep opacity at 1
    transform: animation ? "translateX(0)" : "translateX(0)", // No transform for static
    animation: animation ? "moveIn 3s infinite linear" : "none", // Apply animation conditionally
    transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
  };

  const statIconStyle = {
    fontSize: "4rem",
    transition: "transform 0.3s ease",
  };

  const statNumberStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    transition: "transform 0.3s ease",
  };

  return (
    <Container fluid className="bg-dark text-light py-3 mb-2">
      <Row className="d-flex flex-wrap flex-md-nowrap justify-content-center">
        {/* Happy Donors */}
        <Col xs={12} md={3} className="d-flex flex-column align-items-center mb-2">
          <Card.Body style={statCardStyle} className="d-flex flex-column align-items-center">
            <FaUsers className="text-danger" style={statIconStyle} />
            <p className="h2" style={statNumberStyle}>200</p>
            <p className="h5">Happy Donors</p>
          </Card.Body>
        </Col>

        {/* Blood Groups */}
        <Col xs={12} md={3} className="d-flex flex-column align-items-center mb-2">
          <Card.Body style={statCardStyle} className="d-flex flex-column align-items-center">
            <IoIosWater className="text-danger" style={statIconStyle} />
            <p className="h2" style={statNumberStyle}>08</p>
            <p className="h5">Blood Groups</p>
          </Card.Body>
        </Col>

        {/* Success Smile */}
        <Col xs={12} md={3} className="d-flex flex-column align-items-center mb-2">
          <Card.Body style={statCardStyle} className="d-flex flex-column align-items-center">
            <FaHandshake className="text-danger" style={statIconStyle} />
            <p className="h2" style={statNumberStyle}>45</p>
            <p className="h5">Success Smile</p>
          </Card.Body>
        </Col>

        {/* Total Awards */}
        <Col xs={12} md={3} className="d-flex flex-column align-items-center mb-2">
          <Card.Body style={statCardStyle} className="d-flex flex-column align-items-center">
            <FaTrophy className="text-danger" style={statIconStyle} />
            <p className="h2" style={statNumberStyle}>90</p>
            <p className="h5">Total Awards</p>
          </Card.Body>
        </Col>
      </Row>

      {/* Keyframe Animation */}
      <style >
        {`
          @keyframes moveIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              transform: translateX(50%);
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Stats;