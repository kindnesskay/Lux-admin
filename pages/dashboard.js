import { useState } from "react";
import Dashboard from "../components/dashboard/Dashboard";

export default function ControlDashboard() {
  const [recentOrders, setRecentOrders] = useState([]);
  return (
    <>
      <Dashboard />
    </>
  );
}
