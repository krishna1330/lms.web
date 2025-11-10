import React from 'react';
import ManagerHeader from '../components/ManagerHeader';

const ManagerDashboard = () => {
    return (
        <div>
            <ManagerHeader />
            <div style={{ padding: '20px', marginTop: '80px' }}>
                <h2>Welcome, Manager 👋</h2>
                <p>Here you can manage employee leave requests and approvals.</p>
            </div>
        </div>
    );
};

export default ManagerDashboard;
