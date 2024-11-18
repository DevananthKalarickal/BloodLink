import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";

const Consumer = () => {
  const [data, setData] = useState([]);

  // Mock data for hospital inventory records
  const mockInventoryData = [
    {
      _id: "1",
      bloodGroup: "A+",
      inventoryType: "requested",
      quantity: 500,
      email: "donor1@example.com",
      createdAt: "2024-01-05T12:00:00Z",
    },
    {
      _id: "2",
      bloodGroup: "B+",
      inventoryType: "requested",
      quantity: 300,
      email: "donor2@example.com",
      createdAt: "2024-01-06T14:30:00Z",
    },
    {
      _id: "3",
      bloodGroup: "O+",
      inventoryType: "requested",
      quantity: 450,
      email: "donor3@example.com",
      createdAt: "2024-01-07T10:00:00Z",
    },
  ];

  useEffect(() => {
    setData(mockInventoryData);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getBloodGroupColor = (bloodGroup) => {
    const colors = {
      "A+": "bg-danger text-white",
      "B+": "bg-primary text-white",
      "O+": "bg-success text-white",
      "AB+": "bg-info text-white",
      "A-": "bg-warning text-dark",
      "B-": "bg-teal text-white",
      "O-": "bg-yellow text-dark",
      "AB-": "bg-pink text-white",
    };
    return colors[bloodGroup] || "bg-secondary text-white";
  };

  return (
    <Layout>
      <div className="p-6 bg-light min-vh-100">
        <div className="card">
          <div className="card-body">
            {/* Heading and Paragraph */}
            <h2 className="card-title">Blood Inventory Overview</h2>
            <p className="card-text">
              Below is the list of blood group inventory requests made by donors.
              You can view the details such as blood group, inventory type, quantity,
              contact email, and the date of request.
            </p>

            {/* Table */}
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>Blood Group</th>
                    <th>Type</th>
                    <th className="text-right">Quantity (ml)</th>
                    <th>Contact</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((record) => (
                    <tr key={record._id}>
                      <td>
                        <span
                          className={`badge ${getBloodGroupColor(record.bloodGroup)}`}
                        >
                          {record.bloodGroup}
                        </span>
                      </td>
                      <td>{record.inventoryType}</td>
                      <td className="text-right">{record.quantity}</td>
                      <td>{record.email}</td>
                      <td>{formatDate(record.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Consumer;
