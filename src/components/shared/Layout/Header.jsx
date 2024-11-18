import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { MdOutlineBloodtype } from "react-icons/md";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import "./Header.css"

const Headerr = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      className="custom"
      sticky="top"
    >
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand href="#" className="brand">
          <MdOutlineBloodtype className="brand-icon" />
         <span className="highlight"> BloodLink</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* User Greeting */}
            <Nav.Item className="me-4">
              {currentUser ? (
                <span className="user-greeting">
                  <BiUserCircle className="user-icon" />
                  Welcome{" "}
                  {currentUser.name ||
                    currentUser.hospitalName ||
                    currentUser.organisationName}{" "}
                  <Badge bg="secondary" className="role-badge">
                    {currentUser.role}
                  </Badge>
                </span>
              ) : (
                <span className="guest-greeting">Welcome, Guest</span>
              )}
            </Nav.Item>

            {/* Conditional Links */}
            {["/home", "/donar", "/hospital", "/admin"].includes(
              location.pathname
            ) ? (
              <Nav.Item className="me-4">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </Nav.Item>
            ) : (
              <Nav.Item className="me-4">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </Nav.Item>
            )}

            {/* Logout Button */}
            {currentUser && (
              <Nav.Item>
                <Button onClick={handleLogout} className="logout-btn">
                  Logout
                </Button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headerr;
