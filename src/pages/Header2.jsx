import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { MdOutlineBloodtype } from "react-icons/md";
import { Navbar, Nav, Container, Button, Badge, Form, InputGroup } from "react-bootstrap";
import "./Header2.css";

const Headerr = ({ data, onSearchResults }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!data) {
      console.log("No data available to search");
      return;
    }

    const filteredResults = data.filter(item => 
      Object.values(item).some(value => 
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    onSearchResults(filteredResults);
  };

  return (
    <Navbar expand="lg" className="custom" sticky="top">
      <Container fluid>
        {/* Brand */}
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#" className="brand me-3">
            <MdOutlineBloodtype className="brand-icon" />
            <span className="highlight">BloodLink</span>
          </Navbar.Brand>
        </div>

        {/* Navbar Toggle Button for Collapsing */}
        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Search Bar */}
            <div className="d-none d-lg-flex align-items-center me-3">
              <Form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  style={{
                    width: '200px',
                    borderRadius: '30px',
                    padding: '5px 20px',
                    marginRight: '5px'     // Adds space between input and button
                  }}
                />
                <Button type="submit" className="search-btn" style={{
                  borderRadius: '30px',
                  padding: '5px 15px',
                  backgroundColor: '#b1a1a1',
                  color: 'white',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}>
                  Search
                </Button>
              </Form>
            </div>

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
            {["/home", "/donar", "/hospital", "/admin"].includes(location.pathname) ? (
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
