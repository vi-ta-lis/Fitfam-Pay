import Footer from "./Footer";
import DashHeader from "./DashHeader";
function DashboardLayout() {
  return (
    <>
      <div>
        <DashHeader />
        <main>
          <div className="dashboard-content">
            <h1>Welcome to the Dashboard</h1>
            <p>Manage your gym's subscribers and view statistics here.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DashboardLayout;
