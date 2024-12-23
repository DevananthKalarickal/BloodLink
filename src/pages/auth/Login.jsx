import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { Container, Row, Col, Alert } from "react-bootstrap"; // Import Bootstrap components
import "./Login.css";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <Container fluid className="login-page">
      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <Row className="justify-content-center align-items-center full-height">
          <Col xs={12} md={8} lg={6} className="login-container">
            <div className="form-wrapper">
              <div className="form-banner">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/blood-donation-camp-5526365-4620411.png"
                  alt="loginImage"
                  className="img-fluid" // Ensures the image is responsive
                />
              </div>
              <div className="form-content">
                <Form
                  formTitle={"Login"}
                  submitBtn={"Login"}
                  formType={"login"}
                />
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Login;
