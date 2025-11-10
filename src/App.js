import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import ManagerDashboard from './pages/ManagerDashboard';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<Auth />} />

        {/* Protected Dashboard route */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <ManagerDashboard /> : <Navigate to="/login" replace />}
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
