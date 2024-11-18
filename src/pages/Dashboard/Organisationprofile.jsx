import React, { useState } from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Building } from 'lucide-react';
import Layout from '../../components/shared/Layout/Layout';

const OrganisationProfile = () => {
  const initialOrgInfo = {
    name: 'Tech Corp',
    email: 'contact@techcorp.com',
    phone: '9876543210',
    address: '123 Main St, Silicon Valley',
    website: 'www.techcorp.com',
  };

  const [orgInfo, setOrgInfo] = useState(initialOrgInfo);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrgInfo({ ...orgInfo, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Layout>
      <Card
        className="shadow-lg mx-auto"
        style={{ maxWidth: '600px', backgroundColor: '#f5f5f5', borderColor: '#007bff' }}
      >
        <Card.Body className="p-4">
          <Row>
            {/* Organization Info */}
            <Col xs={12} md={8}>
              <div className="space-y-3">
                {['name', 'email', 'phone', 'address', 'website'].map((field) => (
                  <div key={field} className="d-flex gap-2 mb-2">
                    <span className="text-primary font-weight-bold" style={{ minWidth: '120px' }}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </span>
                    {isEditing ? (
                      <Form.Control
                        type="text"
                        name={field}
                        value={orgInfo[field]}
                        onChange={handleInputChange}
                        size="sm"
                        className="w-75"
                      />
                    ) : (
                      <span className="text-secondary">{orgInfo[field]}</span>
                    )}
                  </div>
                ))}
              </div>
            </Col>

            {/* Profile Icon */}
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center align-items-center mt-3 mt-md-0"
            >
              <div className="w-16 h-16 bg-light rounded-circle d-flex justify-content-center align-items-center">
                <Building className="w-12 h-12 text-primary" />
              </div>
            </Col>
          </Row>

          {/* Action Buttons */}
          <div className="mt-4 d-flex justify-content-between">
         
            {isEditing ? (
              <>
                <Button
                  style={{ backgroundColor: 'green', border: 'none' }}
                  size="sm"
                  className="no-hover m-2"
                  onClick={toggleEdit}
                >
                  Save
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="ms-2 no-hover"
                  onClick={() => {
                    setOrgInfo(initialOrgInfo);
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button variant="warning" size="sm" className="m-2" onClick={toggleEdit}>
                Edit Profile
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Custom CSS */}
      <style>
        {`
          .no-hover:hover {
            background-color: inherit !important;
            color: inherit !important;
          }
        `}
      </style>
    </Layout>
  );
};

export default OrganisationProfile;
