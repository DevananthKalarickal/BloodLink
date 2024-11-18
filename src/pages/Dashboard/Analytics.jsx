import React, { useState, useEffect } from "react";
import { DropletIcon, TrendingUpIcon, ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Card } from "react-bootstrap"; // Import Bootstrap Card
import Header from "../../components/shared/Layout/Header";


const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const mockBloodGroupData = [
    { bloodGroup: "A+", totalIn: 500, totalOut: 400, availableBlood: 100 },
    { bloodGroup: "B+", totalIn: 6000, totalOut: 2500, availableBlood: 3500 },
    { bloodGroup: "AB+", totalIn: 4000, totalOut: 1500, availableBlood: 2500 },
    { bloodGroup: "O+", totalIn: 8000, totalOut: 3000, availableBlood: 4000 },
    { bloodGroup: "A-", totalIn: 1000, totalOut: 500, availableBlood: 500 },
  ];

  const mockInventoryData = [
    {
      _id: "1",
      bloodGroup: "A+",
      inventoryType: "Request",
      quantity: 500,
      email: "donor@example.com",
      createdAt: "2024-01-15T08:30:00Z",
    },
    {
      _id: "2",
      bloodGroup: "A+",
      inventoryType: "Donated",
      quantity: 500,
      email: "anotherdonor@example.com",
      createdAt: "2024-02-01T10:00:00Z",
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

  useEffect(() => {
    // Simulating an asynchronous data fetching with mock data
    const fetchData = () => {
      try {
        setData(mockBloodGroupData.filter(record => record.totalIn > 0 || record.totalOut > 0 || record.availableBlood > 0));
        setInventoryData(mockInventoryData.filter(record => record.quantity > 0));
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getBloodGroupColor = (bloodGroup) => {
    const colors = {
      'A+': 'bg-Aplus',
      'B+': 'bg-Bplus',
      'AB+': 'bg-ABplus',
      'O+': 'bg-Oplus',
      'A-': 'bg-Aminus',
      'B-': 'bg-Bminus',
      'O-': 'bg-Ominus',
      'AB-': 'bg-ABminus',
    };
    
    return colors[bloodGroup] || 'bg-secondary';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-light p-6 m-3">
        <div className="container space-y-8">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <DropletIcon className="h-8 w-8 text-danger" />
              <h1 className="h3 font-weight-bold text-dark">Blood Bank Analytics</h1>
            </div>
            <div className="d-flex align-items-center gap-2">
              <TrendingUpIcon className="h-5 w-5 text-success" />
              <span className="small font-weight-medium text-muted">Live Updates</span>
            </div>
          </div>

          {/* Blood Group Analytics Grid */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {data.map((record, i) => (
              <div key={i} className="col">
                <Card className="overflow-hidden">
                  <Card.Header className={`text-white ${getBloodGroupColor(record.bloodGroup)}`}>
                    <h5 className="m-0">{record.bloodGroup}</h5>
                  </Card.Header>
                  <Card.Body className="pt-4">
                    <div className="row">
                      <div className="col-6">
                        <div className="small text-muted">Total In</div>
                        <div className="d-flex align-items-center gap-1">
                          <ArrowUpIcon className="h-4 w-4 text-success" />
                          <span className="font-weight-semibold">{record.totalIn}</span>
                          <span className="small text-muted">ML</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="small text-muted">Total Out</div>
                        <div className="d-flex align-items-center gap-1">
                          <ArrowDownIcon className="h-4 w-4 text-danger" />
                          <span className="font-weight-semibold">{record.totalOut}</span>
                          <span className="small text-muted">ML</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-top">
                      <div className="small text-muted">Available</div>
                      <div className="font-weight-bold text-dark">
                        {record.availableBlood} ML
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          {/* Recent Transactions */}
          <Card>
            <Card.Header>
              <h5 className="m-0">Recent Blood Transactions</h5>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th className="py-3 text-left">Blood Group</th>
                      <th className="py-3 text-left">Type</th>
                      <th className="py-3 text-right">Quantity</th>
                      <th className="py-3 text-left">Contact</th>
                      <th className="py-3 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.map((record) => (
                      <tr key={record._id}>
                        <td>
                          <span className={`badge ${getBloodGroupColor(record.bloodGroup)} text-white`}>
                            {record.bloodGroup}
                          </span>
                        </td>
                        <td className="capitalize">{record.inventoryType}</td>
                        <td className="text-right">{record.quantity} ML</td>
                        <td className="font-mono text-sm">{record.email}</td>
                        <td className="text-muted">{formatDate(record.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Analytics;
