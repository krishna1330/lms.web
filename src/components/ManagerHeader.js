import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import { Menu, MenuItem } from "@progress/kendo-react-layout";
import { Avatar } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";
import "@progress/kendo-theme-default/dist/all.css";
import { Icon } from "@progress/kendo-react-common";

const ManagerHeader = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleProfileAction = (action) => {
    if (action === "Logout") {
      localStorage.removeItem("token");
      navigate("/login");
    } else if (action === "Profile") {
      navigate("/profile");
    }
  };

  const styles = {
    appBar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      color: "#ffffff",
      padding: "0 30px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    },
    appTitle: {
      color: "#ffffff",
      margin: 0,
      fontWeight: 700,
      fontSize: "1.5rem",
      letterSpacing: "0.3px",
    },
    menuSection: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    menuItem: {
      color: "#ffffff",
      fontWeight: 500,
      cursor: "pointer",
      padding: "10px 14px",
      borderRadius: "6px",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
    },
    profileSection: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#ffffff",
      cursor: "pointer",
      fontWeight: 500,
      padding: "6px 12px",
      borderRadius: "8px",
    },
  };

  return (
    <AppBar positionMode="sticky" themeColor="primary" style={styles.appBar}>
      {/* Left section – Title */}
      <AppBarSection>
        <h3 style={styles.appTitle}>Leave Management System</h3>
      </AppBarSection>

      <AppBarSpacer style={{ width: 50 }} />

      {/* Center – Menu Navigation */}
      <AppBarSection>
        <div style={styles.menuSection}>
          <span
            style={styles.menuItem}
            onClick={() => handleNavigation("/dashboard")}
          >
            Dashboard
          </span>
          <span
            style={styles.menuItem}
            onClick={() => handleNavigation("/leave-requests")}
          >
            Leave Requests
          </span>
          <span
            style={styles.menuItem}
            onClick={() => handleNavigation("/employees")}
          >
            Employees
          </span>
          <span
            style={styles.menuItem}
            onClick={() => handleNavigation("/leave-types")}
          >
            Leave Types
          </span>
        </div>
      </AppBarSection>

      <AppBarSpacer style={{ flex: 1 }} />

      {/* Right – Profile Avatar + Dropdown */}
      <AppBarSection>
        <Menu>
          <MenuItem
            render={() => (
              <div style={styles.profileSection}>
                <Avatar
                  type="icon"
                  shape="circle"
                  size="medium"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "WebComponentsIcons",
                    fontSize: "22px",
                  }}
                >
                  {"\ue801"}
                </Avatar>
                <span>Manager</span>
              </div>
            )}
          >
            <MenuItem
              text="Profile"
              onClick={() => handleProfileAction("Profile")}
            />
            <MenuItem
              text="Logout"
              onClick={() => handleProfileAction("Logout")}
            />
          </MenuItem>
        </Menu>
      </AppBarSection>
    </AppBar>
  );
};

export default ManagerHeader;
