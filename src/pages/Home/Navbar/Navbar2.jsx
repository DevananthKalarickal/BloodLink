import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Image, Offcanvas, Button } from "react-bootstrap";
import { FiLogIn } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../images/logo/logo.png";


const CustomNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm custom-navbar p-3"
      style={{ borderBottom: "2px solid #ddd" }}
    >
      <Container fluid>
        <Row className="align-items-center w-100">
          {/* Logo */}
          <Col xs={6} lg={3} className="d-flex align-items-center">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                className="d-inline-block align-top"
              />
              <span className="fw-bold text-danger fs-4">Bloodlink</span>
            </Navbar.Brand>
          </Col>

          {/* Desktop Navigation */}
          <Col lg={6} className="d-none d-lg-flex justify-content-center">
            <Nav className="gap-4">
              <Nav.Link as={NavLink} to="/" className="fs-6 text-secondary fw-semibold clickable">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register" className="fs-6 text-secondary fw-semibold clickable">
                Donation Request
              </Nav.Link>
              
            </Nav>
          </Col>

          {/* Login Button */}
          <Col xs={6} lg={3} className="d-flex justify-content-end align-items-center gap-3 clickable">
            <Button
              as={NavLink}
              to="/login"
              className="btn-danger text-white d-flex align-items-center gap-2 px-4 py-2 rounded-pill clickable"
            >
              <FiLogIn className="fs-5" />
              Login
            </Button>

            {/* Hamburger Menu */}
            <Navbar.Toggle
              aria-controls="offcanvas-navbar"
              onClick={() => setOpen(!open)}
              className="border-0 d-lg-none"
            >
              <GiHamburgerMenu className="fs-3 text-danger" />
            </Navbar.Toggle>
          </Col>
        </Row>
      </Container>

      {/* Offcanvas Menu for Small Screens */}
      <Offcanvas
        show={open}
        onHide={() => setOpen(false)}
        placement="end"
        className="offcanvas-menu"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-danger fs-4">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-secondary fs-6"
              onClick={() => setOpen(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/register"
              className="text-secondary fs-6"
              onClick={() => setOpen(false)}
            >
              Donation Request
            </Nav.Link>
           
            <Nav.Link
              as={NavLink}
              to="/login"
              className="btn btn-danger text-white d-flex align-items-center gap-2 fs-6 fw-bold rounded-pill px-3 py-2"
              onClick={() => setOpen(false)}
            >
              <FiLogIn />
              Login
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default CustomNavbar;
