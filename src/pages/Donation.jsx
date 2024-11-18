import moment from "moment";
import React, { useEffect, useState } from "react";
import Header from "../components/shared/Layout/Header";
import Sidebar from "../components/shared/Layout/Sidebar";

const Donation = () => {
  const [data, setData] = useState([]);

  // Mock data
  const mockInventoryData = [
    {
      _id: "1",
      bloodGroup: "A+",
      inventoryType: "Donated",
      quantity: 500,
      email: "anotherdonor@example.com",
      createdAt: "2024-02-01T10:00:00Z",
    },
  ];

  // Set the mock data on component mount
  useEffect(() => {
    setData(mockInventoryData); // Set mock data directly
  }, []);

  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="d-flex">
        <div className="col-12 col-md-2 p-0">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9 p-6 m-3">
          <div className="container mt-4">
            {data.length === 0 ? (
              <p>No data available</p> // Display if no data
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Inventory Type</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((record) => (
                    <tr key={record._id}>
                      <td>{record.bloodGroup}</td>
                      <td>{record.inventoryType}</td>
                      <td>{record.quantity}</td>
                      <td>{record.email}</td>
                      <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
