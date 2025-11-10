import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const employees = [
  { id: 1, name: 'Murali', leaveType: 'Sick Leave', days: 2, status: 'Approved' },
  { id: 2, name: 'Rahul', leaveType: 'Casual Leave', days: 1, status: 'Pending' },
];

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h2>Leave Management System</h2>

      <Button themeColor="primary" onClick={() => alert('Apply Leave clicked')}>
        Apply Leave
      </Button>

      <Grid data={employees} style={{ marginTop: '20px' }}>
        <GridColumn field="id" title="ID" width="50px" />
        <GridColumn field="name" title="Employee Name" />
        <GridColumn field="leaveType" title="Leave Type" />
        <GridColumn field="days" title="Days" />
        <GridColumn field="status" title="Status" />
      </Grid>
    </div>
  );
}

export default App;