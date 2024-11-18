import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";

const Donar = () => {
  const [data, setData] = useState([]);

  // Mock data for donars
  const mockDonarData = [
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      createdAt: "2024-01-05T12:00:00Z",
    },
    {
      _id: "2",
      organisationName: "Health Org",
      email: "contact@healthorg.com",
      phone: "0987654321",
      createdAt: "2024-01-06T14:30:00Z",
    },
    {
      _id: "3",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "1122334455",
      createdAt: "2024-01-07T10:00:00Z",
    },
  ];

  // Replace getDonars function to use mock data
  const getDonars = () => {
    setData(mockDonarData);
  };

  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record._id}>
              <td>{record.name || record.organisationName + " (ORG)"}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Donar;
