import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/Auth";
import ManagerDashboard from "./pages/ManagerDashboard";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<Auth />} />

        {/* Manager Dashboard (only if logged in) */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <ManagerDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
