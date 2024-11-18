import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";

const Hospitals = () => {
  const [data, setData] = useState([]);

  // Mock data for hospitals
  const mockHospitalData = [
    {
      _id: "1",
      hospitalName: "City Hospital",
      email: "contact@cityhospital.com",
      phone: "1234567890",
      address: "123 Main St, Cityville",
      createdAt: "2024-01-05T12:00:00Z",
    },
    {
      _id: "2",
      hospitalName: "Health Care Clinic",
      email: "info@healthcareclinic.com",
      phone: "0987654321",
      address: "456 Health Rd, Townsville",
      createdAt: "2024-01-06T14:30:00Z",
    },
    {
      _id: "3",
      hospitalName: "Wellness Center",
      email: "admin@wellnesscenter.com",
      phone: "1122334455",
      address: "789 Wellness Ave, Villagetown",
      createdAt: "2024-01-07T10:00:00Z",
    },
  ];

  // Replace getDonars function to use mock data
  const getDonars = () => {
    setData(mockHospitalData);
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
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record._id}>
              <td>{record.hospitalName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Hospitals;
