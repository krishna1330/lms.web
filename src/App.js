import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ManagerDashboard from './pages/ManagerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route shows Dashboard */}
        <Route path="/" element={<ManagerDashboard />} />

        {/* Redirect unknown URLs back to Dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
