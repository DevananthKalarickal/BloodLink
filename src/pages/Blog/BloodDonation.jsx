import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const BloodDonation = () => {
  const cardStyles = {
    width: '100%', // Changed to 100% for responsiveness
    maxWidth: '500px', // Set a max width for larger screens
    height: '300px',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glassmorphic effect
    borderRadius: '15px',
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'left',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)', // Border for glassmorphism
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const hoverCardStyles = (e, isHovering) => {
    e.currentTarget.style.transform = isHovering ? 'scale(1.05)' : 'scale(1)';
    e.currentTarget.style.boxShadow = isHovering
      ? '0 6px 25px rgba(0, 0, 0, 0.15)'
      : '0 4px 20px rgba(0, 0, 0, 0.1)';
  };

  const overlayStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.7)',
  };

  const textOverlayStyles = {
    position: 'absolute',
    top: '50%',
    left: '30px',
    transform: 'translateY(-50%)',
    color: '#ffffff',
    textAlign: 'left',
    zIndex: 2,
  };

  const buttonStyles = {
    padding: '15px 30px',
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    textDecoration: 'none', // Remove underline
    display: 'inline-block', // Make it behave like a button
    textAlign: 'center', // Center the text
  };

  return (
    <Container>
      <div
        style={{
          padding: '30px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f8f9fa',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap', // Allow wrapping of cards
            justifyContent: 'center',
            gap: '40px', // Adjusted spacing between cards
            marginBottom: '50px',
          }}
        >
          {/* Donate Blood Card */}
          <div
            style={cardStyles}
            onMouseEnter={(e) => hoverCardStyles(e, true)}
            onMouseLeave={(e) => hoverCardStyles(e, false)}
          >
            <div
              style={{
                ...overlayStyles,
                backgroundImage:
                  "url('https://i0.wp.com/heretoserve.org/wp-content/uploads/2021/01/blood_donor.png?resize=510%2C294&ssl=1')",
              }}
            ></div>
            <div style={textOverlayStyles}>
              <h3 style={{ fontSize: '20px', margin: '10px 0' }}>Save Lives Today</h3>
              <h2 style={{ fontSize: '22px', marginBottom: '50px' }}>Donate Blood At HemoCell</h2>
              <NavLink to="/login" style={buttonStyles}>
                Donate Now
              </NavLink>
            </div>
          </div>

          {/* Request Blood Card */}
          <div
            style={cardStyles}
            onMouseEnter={(e) => hoverCardStyles(e, true)}
            onMouseLeave={(e) => hoverCardStyles(e, false)}
          >
            <div
              style={{
                ...overlayStyles,
                backgroundImage:
                  "url('https://batonrougeclinic.com/wp-content/uploads/2022/01/Baldwin-1-10-Reasons-to-Donate-Blood-e1641235978110.jpg')",
              }}
            ></div>
            <div style={textOverlayStyles}>
              <h3 style={{ fontSize: '20px', margin: '10px 0' }}>Urgent Need For Blood</h3>
              <h2 style={{ fontSize: '22px', marginBottom: '50px' }}>Request Blood Donation</h2>
              <NavLink to="/register" style={buttonStyles}>
                Request Now
              </NavLink>
            </div>
          </div>
        </div>

        {/* Donation Process Section */}
        <div>
          <h4
            style={{
              color: '#e63946',
              fontSize: '18px',
              textAlign: 'left',
              margin: '20px 0',
            }}
          >
            Donation Process
          </h4>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '30px',
              textAlign: 'left',
            }}
          >
            Step-by-Step Guide to Donating Blood
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {['Check Your Eligibility', 'Schedule Appointment', 'Donate Blood'].map(
              (title, index) => (
                <div
                  key={index}
                  style={{
                    width: '30%',
                    minWidth: '250px', // Ensure a minimum width for smaller screens
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '20px',
                    borderRadius: '15px',
                    textAlign: 'left',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px', // Space between rows
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <div
                    style={{
                      backgroundColor: 'white',
                      color: 'grey',
                      fontSize: '20px',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      marginRight: '20px',
                    }}
                  >
                    {`0${index + 1}`}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px', fontWeight: 'bold' }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6c757d' }}>
                      {index === 0 &&
                        'Check your eligibility to donate blood (age, weight, health status).'}
                      {index === 1 &&
                        'Schedule your appointment at a nearby blood bank or donation drive.'}
                      {index === 2 &&
                        'Arrive, fill out the form, and donate blood (10-15 min).'}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BloodDonation;
