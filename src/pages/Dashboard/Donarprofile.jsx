import React, { useState } from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { User } from 'lucide-react';
import Layout from '../../components/shared/Layout/Layout';

const DonorCard = () => {
  const initialDonorInfo = {
    name: 'Christopher',
    contact: '123456789',
    location: 'Dcf',
    bloodGroup: '',
    gender: '',
    age: '',
  };

  const [donorInfo, setDonorInfo] = useState(initialDonorInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo({ ...donorInfo, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Layout>
      <Card className="shadow-lg mx-auto" style={{ maxWidth: '500px', backgroundColor: '#fff', borderColor: '#d9534f' }}>
        <Card.Body className="p-4">
          <Row>
            {/* Donor Info */}
            <Col xs={12} md={8}>
              <div className="space-y-2">
                <div className="d-flex gap-2">
                  <span className="text-danger font-weight-bold" style={{ minWidth: '100px' }}>
                    Name:
                  </span>
                  <span className="text-secondary">{donorInfo.name}</span>
                </div>
                <div className="d-flex gap-2">
                  <span className="text-danger font-weight-bold" style={{ minWidth: '100px' }}>
                    Contact:
                  </span>
                  <span className="text-secondary">{donorInfo.contact}</span>
                </div>
                <div className="d-flex gap-2">
                  <span className="text-danger font-weight-bold" style={{ minWidth: '100px' }}>
                    Location:
                  </span>
                  <span className="text-secondary">{donorInfo.location}</span>
                </div>

                {/* Additional Details */}
                {showDetails && (
                  <>
                    {['bloodGroup', 'gender', 'age'].map((field) => (
                      <div key={field} className="d-flex gap-2">
                        <span className="text-danger font-weight-bold" style={{ minWidth: '100px' }}>
                          {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </span>
                        {isEditing ? (
                          <Form.Control
                            type="text"
                            name={field}
                            value={donorInfo[field]}
                            onChange={handleInputChange}
                            size="sm"
                            className="w-75 "
                          />
                        ) : (
                          <span className="text-secondary">{donorInfo[field] || 'N/A'}</span>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </Col>

            {/* Profile Icon */}
            <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mt-3 mt-md-0">
              <div className="w-16 h-16 bg-light rounded-circle d-flex justify-content-center align-items-center">
                <User className="w-12 h-12 text-danger" />
              </div>
            </Col>
          </Row>

          {/* Action Buttons */}
          <div className="mt-3 d-flex justify-content-between">
            <Button
              variant="danger"
              size="sm"
              className="no-hover"
              onClick={toggleDetails}
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
            </Button>
            <div>
              {isEditing ? (
                <>
                  <Button
                    style={{ backgroundColor: 'black', border: 'none' }}
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
                      setDonorInfo(initialDonorInfo);
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button variant="warning m-2" size="sm" onClick={toggleEdit}>
                  Edit
                </Button>
              )}
            </div>
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

export default DonorCard;
