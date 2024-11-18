import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <Container fluid className="register-page">
      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <Row className="justify-content-center align-items-center full-height">
          <Col xs={12} md={8} lg={6} className="register-container">
            <div className="form-wrapper">
              <div className="form-banner">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/woman-donate-blood-in-blood-donation-camp-at-hospital-8123144-6477085.png"
                  alt="registerImage"
                  className="img-fluid"
                />
              </div>
              <div className="form-content">
                <Form
                  formTitle={"Register"}
                  submitBtn={"Register"}
                  formType={"register"}
                />
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Register;
