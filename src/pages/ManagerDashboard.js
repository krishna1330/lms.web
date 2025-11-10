import React, { useState } from "react";
import ManagerHeader from "../components/ManagerHeader";
import { employees as initialData } from "../services/employeeService";
import "@progress/kendo-theme-default/dist/all.css";

const ManagerDashboard = () => {
  const [employeeList, setEmployeeList] = useState(initialData);

  // ✅ Toggle employee Active/Inactive
  const handleToggle = (id) => {
    const updated = employeeList.map((emp) =>
      emp.id === id ? { ...emp, isActive: !emp.isActive } : emp
    );
    setEmployeeList(updated);
  };

  // ✅ Styles
  const styles = {
    container: {
      maxWidth: "950px",
      margin: "40px auto",
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      padding: "35px 40px",
    },
    title: {
      color: "#1976d2",
      textAlign: "center",
      fontSize: "1.9rem",
      fontWeight: "700",
      marginBottom: "10px",
    },
    subtitle: {
      textAlign: "center",
      color: "#555",
      marginBottom: "30px",
      fontSize: "0.95rem",
    },
    tableWrapper: {
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      borderRadius: "12px",
      overflow: "hidden",
    },
    th: {
      background: "#1976d2",
      color: "#fff",
      textAlign: "left",
      padding: "14px 12px",
      fontSize: "0.95rem",
      letterSpacing: "0.3px",
    },
    td: {
      padding: "12px 12px",
      fontSize: "0.9rem",
      color: "#333",
      borderBottom: "1px solid #e0e0e0",
      transition: "background 0.2s ease-in-out",
    },
    trHover: {
      transition: "all 0.2s ease-in-out",
    },
    badgeActive: {
      background: "#4caf50",
      color: "#fff",
      padding: "6px 14px",
      borderRadius: "25px",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 3px 8px rgba(76,175,80,0.3)",
    },
    badgeInactive: {
      background: "#f44336",
      color: "#fff",
      padding: "6px 14px",
      borderRadius: "25px",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 3px 8px rgba(244,67,54,0.3)",
    },
  };

  return (
    <div style={styles.page}>
      <ManagerHeader />
      <div style={styles.container}>
        <h2 style={styles.title}>👩‍💼 Employee Management</h2>
        <p style={styles.subtitle}>View and manage employee statuses.</p>

        {/* 🧾 Employee Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>First Name</th>
                <th style={styles.th}>Last Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((emp, index) => (
                <tr
                  key={emp.id}
                  style={{
                    ...styles.trHover,
                    background: index % 2 === 0 ? "#fafafa" : "#ffffff",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#eef6ff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      index % 2 === 0 ? "#fafafa" : "#ffffff")
                  }
                >
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{emp.firstName}</td>
                  <td style={styles.td}>{emp.lastName}</td>
                  <td style={styles.td}>{emp.email}</td>
                  <td style={styles.td}>
                    <button
                      style={
                        emp.isActive ? styles.badgeActive : styles.badgeInactive
                      }
                      onClick={() => handleToggle(emp.id)}
                    >
                      {emp.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
