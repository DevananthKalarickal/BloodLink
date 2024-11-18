import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PlusIcon, DatabaseIcon, MailIcon, CalendarIcon } from "lucide-react";
import Modal from "../components/shared/modal/Modal";
import "./HomePage.css";
import Headerr from "./Headerr";
import Sidebar from "../components/shared/Layout/Sidebar";

const HomePage = () => {
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);
  const { records } = useSelector((state) => state.blood);

  // Mock data
  const mockData = [
    {
      _id: "1",
      bloodGroup: "A+",
      inventoryType: "Request",
      quantity: 500,
      email: "donor@example.com",
      createdAt: "2024-11-15T08:30:00Z",
    },
    {
      _id: "2",
      bloodGroup: "A+",
      inventoryType: "Donated",
      quantity: 500,
      email: "anotherdonor@example.com",
      createdAt: "2024-05-01T10:00:00Z",
    },
    {
      _id: "3",
      bloodGroup: "B-",
      inventoryType: "Request",
      quantity: 300,
      email: "exampledonor2@example.com",
      createdAt: "2024-03-10T14:45:00Z",
    },
  ];

  // Combine Redux data with mock data
  const [data, setData] = useState([...mockData, ...(records || [])]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInventoryColor = (type) => {
    return type === "Donated" ? "badge-donated" : "badge-request";
  };

  const handleNewRecord = (record) => {
    setData((prevData) => [record, ...prevData]);
  };

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin");
    }
  }, [user, navigate]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Headerr />
      <div className="container-fluid mt-3">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xs-12 col-md-3 col-lg-2 p-0">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="col-xs-12 col-md-9 col-lg-10 p-4">
            <div className="wrapper">
              <div className="page-header d-flex align-items-center justify-content-between">
                <h1>
                  <DatabaseIcon className="w-10 h-10" /> Blood Inventory
                </h1>
                <button
                  className="ms-5 btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  style={{ cursor: "pointer" }}
                >
                  <PlusIcon className="w-5 h-5" /> Add New Record
                </button>
              </div>
              <div className="table-wrapper">
                <div className="table-container">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Blood Group</th>
                        <th>Inventory Type</th>
                        <th>Quantity (ML)</th>
                        <th>Donor Email</th>
                        <th>Date & Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((record) => (
                        <tr key={record._id}>
                          <td>
                            <span className="badge badge-blood-group">
                              {record.bloodGroup}
                            </span>
                          </td>
                          <td>
                            <span className={`badge ${getInventoryColor(record.inventoryType)}`}>
                              {record.inventoryType}
                            </span>
                          </td>
                          <td>{record.quantity}</td>
                          <td>
                            <MailIcon /> {record.email}
                          </td>
                          <td>
                            <CalendarIcon /> {formatDate(record.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <Modal onRecordSubmit={handleNewRecord} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
