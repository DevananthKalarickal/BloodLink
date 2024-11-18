

import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import { Container, Row, Col } from 'react-bootstrap';

const Readmore = () => {
    return (
        <div className="mx-auto overflow-x-hidden">
        <Navbar2 />

        {/* About Us Section */}
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
                                height: '500px',
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
                                textAlign: 'center',
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
                                Our mission is to provide the highest quality care for all, ensuring a better and healthier future for our community.
                                We believe in the power of collaboration, innovation, and a deep commitment to patient care. 
                                Through our initiatives, we strive to bring lifesaving resources to those in need and raise awareness about the importance of blood donation.
                                Together, we aim to create a stronger, healthier society where no one faces medical emergencies alone. 
                                Join us in making a difference today!
                            </p>
                            <p>
                                <strong>Contact Us:</strong> For more information or to get involved, email us at{' '}
                                <a href="mailto:bloodlink@example.com" style={{ color: '#007bff' }}>
                                    bloodlink@example.com
                                </a>.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <Footer />
    </div>
    );
};



export default Readmore;
