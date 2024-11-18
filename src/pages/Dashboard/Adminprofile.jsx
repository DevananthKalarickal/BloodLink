import React, { useState } from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { User } from 'lucide-react';
import Layout from '../../components/shared/Layout/Layout';

const AdminProfile = () => {
  const initialAdminInfo = {
    name: 'Administrator',
    email: 'admin@example.com',
    contact: '9876543210',
    role: 'Super Admin',
    organization: 'Tech Corp',
  };

  const [adminInfo, setAdminInfo] = useState(initialAdminInfo);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminInfo({ ...adminInfo, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Layout>
      <Card className="shadow-lg mx-auto" style={{ maxWidth: '500px', backgroundColor: '#f9f9f9', borderColor: '#343a40' }}>
        <Card.Body className="p-4">
          <Row>
            {/* Admin Info */}
            <Col xs={12} md={8}>
              <div className="space-y-2">
                {['name', 'email', 'contact', 'role', 'organization'].map((field) => (
                  <div key={field} className="d-flex gap-2">
                    <span className="text-dark font-weight-bold" style={{ minWidth: '120px' }}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </span>
                    {isEditing ? (
                      <Form.Control
                        type="text"
                        name={field}
                        value={adminInfo[field]}
                        onChange={handleInputChange}
                        size="sm"
                        className="w-75"
                      />
                    ) : (
                      <span className="text-secondary">{adminInfo[field]}</span>
                    )}
                  </div>
                ))}
              </div>
            </Col>

            {/* Profile Icon */}
            <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mt-3 mt-md-0">
              <div className="w-16 h-16 bg-light rounded-circle d-flex justify-content-center align-items-center">
                <User className="w-12 h-12 text-dark" />
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
                    setAdminInfo(initialAdminInfo);
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

export default AdminProfile;
