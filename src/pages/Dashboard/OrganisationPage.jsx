import React, { useEffect, useState } from "react";
import moment from "moment";
import Layout from "../../components/shared/Layout/Layout";

const OrganisationPage = () => {
  const [data, setData] = useState([]);

  // Mock data for organizations
  const mockDataDonor = [
    {
      _id: "1",
      organisationName: "Helping Hands",
      email: "info@helpinghands.org",
      phone: "1234567890",
      address: "123 Charity St, Kindtown",
      createdAt: "2024-01-01T09:00:00Z",
    },
  ];

  const mockDataHospital = [
    {
      _id: "2",
      organisationName: "Good Health Hospital",
      email: "contact@goodhealth.com",
      phone: "0987654321",
      address: "456 Care Ave, Healthcity",
      createdAt: "2024-01-02T11:30:00Z",
    },
  ];

  // Get organisation data based on user role
  const getOrg = () => {
    // Assuming user role is set directly for mockup or replace this with any condition
    const userRole = "donar"; // Change to "hospital" for hospital data
    if (userRole === "donar") {
      setData(mockDataDonor);
    } else if (userRole === "hospital") {
      setData(mockDataHospital);
    }
  };

  useEffect(() => {
    getOrg();
  }, []); // Assuming no need to check for `user` here as role is hardcoded

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
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.organisationName}</td>
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

export default OrganisationPage;
