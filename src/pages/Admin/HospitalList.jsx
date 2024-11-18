import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";
import Sidebar from '../../components/shared/Layout/Sidebar';
import Header from "../../components/shared/Layout/Header";

const HospitalList = () => {
  // Mock data to simulate an API response
  const mockHospitals = [
    {
      _id: "1",
      hospitalName: "City Hospital",
      email: "cityhospital@example.com",
      phone: "1234567890",
      createdAt: "2024-01-01T10:00:00Z",
    },
    {
      _id: "2",
      hospitalName: "Green Valley Clinic",
      email: "greenvalley@example.com",
      phone: "0987654321",
      createdAt: "2024-01-02T11:30:00Z",
    },
  ];

  const [data, setData] = useState([]);

  // Mimic fetching hospital records
  const getHospitals = () => {
    setData(mockHospitals);
  };

  useEffect(() => {
    getHospitals();
  }, []);

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const answer = window.confirm("Are you sure you want to delete this hospital?");
    if (answer) {
      // Simulate deletion by filtering out the selected item
      const updatedData = data.filter((record) => record._id !== id);
      setData(updatedData);
      alert("Hospital deleted successfully.");
    }
  };

  return (
    <Layout>
      
            <div className="table-responsive"> {/* Make table scrollable on small screens */}
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
                      <td>{record.hospitalName}</td>
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

export default HospitalList;
