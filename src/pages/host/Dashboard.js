import React from "react";
import { requiredAuth } from "../../authService";

export async function loader() {
  await requiredAuth();
  return null;
}

const Dashboard = () => {
  return <div>This is Dashboard.</div>;
};

export default Dashboard;
