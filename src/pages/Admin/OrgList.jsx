import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";

const OrgList = () => {
  // Mock data to simulate API response
  const mockOrgs = [
    {
      _id: "1",
      organisationName: "Helping Hands",
      email: "contact@helpinghands.org",
      phone: "1234567890",
      createdAt: "2024-01-05T12:00:00Z",
    },
    {
      _id: "2",
      organisationName: "Care Foundation",
      email: "info@carefoundation.com",
      phone: "0987654321",
      createdAt: "2024-01-06T15:30:00Z",
    },
  ];

  const [data, setData] = useState([]);

  // Simulate fetching organization records
  const getOrgs = () => {
    setData(mockOrgs);
  };

  useEffect(() => {
    getOrgs();
  }, []);

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const answer = window.confirm("Are you sure you want to delete this organization?");
    if (answer) {
      // Simulate deletion by filtering out the selected organization
      const updatedData = data.filter((record) => record._id !== id);
      setData(updatedData);
      alert("Organization deleted successfully.");
    }
  };

  return (
    <Layout>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record) => (
              <tr key={record._id}>
                <td>{record.organisationName}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(record._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default OrgList;
