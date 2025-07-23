import DashboardLayout from "./DashboardLayout";

const Dashboard = () => (
  <div className="card">
    <DashboardLayout />
    <div className="card-content">
      <h2 className="section-title">Gym Summary</h2>
      <div className="summary-grid">
        <div className="summary-box summary-total">
          <p>Total Subscribers</p>
          <h3>128</h3>
        </div>
        <div className="summary-box summary-active">
          <p>Active</p>
          <h3>96</h3>
        </div>
        <div className="summary-box summary-expired">
          <p>Expired</p>
          <h3>32</h3>
        </div>
        <div className="summary-box summary-income">
          <p>Monthly Income</p>
          <h3>₦240,000</h3>
        </div>
      </div>
    </div>
  </div>
);
export default Dashboard;
