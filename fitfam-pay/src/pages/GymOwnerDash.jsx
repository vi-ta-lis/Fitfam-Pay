import { NavLink } from "react-router-dom";










export default function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/active" element={<ActiveMembers />} />
          <Route path="/expired" element={<ExpiredMembers />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}
