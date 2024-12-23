import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../../styles/Layout.css";


const Sidebar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={3} xs={12} className="sidebar">
          <div className="sidebar-item">
            {user?.role === "organisation" && (
              <>
                <Link to="/donar" className={`sidebar-button ${location.pathname === "/donar" ? "active" : ""}`}>
                  <i className="icon fa-solid fa-hand-holding-medical"></i>
                  <span className="sidebar-label">Donar</span>
                </Link>
                <Link to="/hospital" className={`sidebar-button ${location.pathname === "/hospital" ? "active" : ""}`}>
                  <i className="icon fa-solid fa-hospital"></i>
                  <span className="sidebar-label">Hospital</span>
                </Link>
                <Link to="/organisationprofile" className={`sidebar-button ${location.pathname === "/organisationprofile" ? "active" : ""}`}>
                  <i className="icon fa-solid fa-building-ngo"></i>
                  <span className="sidebar-label">Organisation Profile</span>
                </Link>
              </>
            )}
            {user?.role === "admin" && (
              <>
                <Link to="/donar-list" className={`sidebar-button ${location.pathname === "/donar-list" ? "active" : ""}`}>
                  <i className="icon fa-solid fa-warehouse"></i>
                  <span className="sidebar-label">Donar List</span>
                </Link>
                <Link to="/hospital-list" className={`sidebar-button ${location.pathname === "/hospital-list" ? "active" : ""}`}>
                  <i className="icon fa-solid fa-hand-holding-medical"></i>
                  <span className="sidebar-label">Hospital List</span>
                </Link>
                <Link to="/org-list" className={`sidebar-button ${location.pathname === "/org-list" ? "active" : ""}`}>
                  <i className="icon fa-solid fa-hospital"></i>
                  <span className="sidebar-label">Organisation List</span>
                </Link>
                <Link to="/Adminprofile" className={`sidebar-button ${location.pathname === "/Adminprofile" ? "active" : ""}`}>
                  <i className="icon  fa-solid fa-user-tie"></i>
                  <span className="sidebar-label">Admin Profile</span>
                  </Link>
              </>
            )}
            {(user?.role === "donar" || user?.role === "hospital") && (
              <Link to="/organisation" className={`sidebar-button ${location.pathname === "/organisation" ? "active" : ""}`}>
                <i className="icon fa-solid fa-building-ngo"></i>
                <span className="sidebar-label">Organisation</span>
              </Link>
            )}
            {user?.role === "hospital" && (
              <Link to="/consumer" className={`sidebar-button ${location.pathname === "/consumer" ? "active" : ""}`}>
                <i className="icon fa-solid fa-user"></i>
                <span className="sidebar-label">Consumer</span>
              </Link>
            )}
             {user?.role === "hospital" && (
              <Link to="/Hospitalprofile" className={`sidebar-button ${location.pathname === "/Hospitalprofile" ? "active" : ""}`}>
                <i className="icon fa-solid fa-hand-holding-medical"></i>
                <span className="sidebar-label">Profile</span>
              </Link>
            )}
            {user?.role === "donar" && (
              <Link to="/donation" className={`sidebar-button ${location.pathname === "/donation" ? "active" : ""}`}>
                <i className="icon fa-solid fa-building-ngo"></i>
                <span className="sidebar-label">Donation</span>
              </Link>
            )}
             {user?.role === "donar" && (
              <Link to="/donarprofile" className={`sidebar-button ${location.pathname === "/donarprofile" ? "active" : ""}`}>
                 <i className="icon fa-solid fa-user-tie"></i>
               
                <span className="sidebar-label">Donar Profile</span>
              </Link>
            )}
          </div>
        </Col>

        <Col md={9} xs={12}>
          {/* Main content will go here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
