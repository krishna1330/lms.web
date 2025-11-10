import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import {
  Card,
  CardHeader,
  CardBody,
  CardActions,
} from "@progress/kendo-react-layout";
import "@progress/kendo-theme-default/dist/all.css";

const Auth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  // ✅ Form validation
  const validate = () => {
    const temp = {};
    if (!formData.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Enter a valid email";
    if (!formData.password) temp.password = "Password is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 800));
    localStorage.setItem("token", "fakeToken");
    navigate("/dashboard");
    setLoading(false);
  };

  // 🎨 Light theme colors
  const colors = {
    bg: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    card: "rgba(255, 255, 255, 0.9)",
    text: "#1e3a8a",
    inputBg: "#ffffff",
    inputBorder: "#ccc",
    placeholder: "#777",
    accent: "#1976d2",
    buttonGradient: "linear-gradient(90deg, #1976d2, #42a5f5)",
    shadow: "rgba(0, 0, 0, 0.15) 0px 10px 25px",
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: colors.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', sans-serif",
      transition: "background 0.4s ease",
    },
    cardContainer: {
      width: "400px",
      padding: "45px 40px",
      borderRadius: "20px",
      background: colors.card,
      boxShadow: colors.shadow,
      backdropFilter: "blur(20px)",
      color: colors.text,
      transition: "all 0.4s ease",
    },
    title: {
      fontWeight: "700",
      fontSize: "1.8rem",
      textAlign: "center",
      color: colors.accent,
      marginBottom: "10px",
    },
    subtitle: {
      textAlign: "center",
      color: colors.placeholder,
      fontSize: "0.95rem",
      marginBottom: "30px",
    },
    label: {
      display: "block",
      color: colors.accent,
      fontWeight: "600",
      marginBottom: "6px",
      fontSize: "0.9rem",
    },
    input: {
      width: "100%",
      padding: "10px 14px",
      borderRadius: "10px",
      border: `1px solid ${colors.inputBorder}`,
      background: colors.inputBg,
      color: colors.text,
      fontSize: "1rem",
      transition: "all 0.3s ease",
      outline: "none",
    },
    inputFocus: {
      borderColor: colors.accent,
      boxShadow: `0 0 6px ${colors.accent}55`,
    },
    error: {
      color: "#ef4444",
      fontSize: "0.8rem",
      marginTop: "5px",
    },
    button: {
      width: "100%",
      height: "46px",
      fontWeight: "600",
      border: "none",
      borderRadius: "10px",
      color: "#fff",
      background: hover
        ? "linear-gradient(90deg, #1565c0, #1e88e5)"
        : colors.buttonGradient,
      transition: "all 0.3s ease",
      boxShadow: "0 6px 20px rgba(25,118,210,0.4)",
      marginTop: "10px",
    },
    footer: {
      textAlign: "center",
      marginTop: "20px",
      color: colors.accent,
      cursor: "pointer",
      fontSize: "0.9rem",
      transition: "color 0.3s ease",
    },
  };

  return (
    <div style={styles.page}>
      {/* 💎 Login Card */}
      <div style={styles.cardContainer}>
        <CardHeader>
          <h2 style={styles.title}>LMS Login</h2>
          <p style={styles.subtitle}>Access your Leave Management account</p>
        </CardHeader>

        <CardBody>
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(formData.email ? styles.inputFocus : {}),
              }}
            />
            {errors.email && <div style={styles.error}>{errors.email}</div>}

            <div style={{ marginTop: "20px" }}>
              <label style={styles.label}>Password</label>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(formData.password ? styles.inputFocus : {}),
                }}
              />
              {errors.password && (
                <div style={styles.error}>{errors.password}</div>
              )}
            </div>

            <CardActions>
              <Button
                type="submit"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={styles.button}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </CardActions>
          </form>
        </CardBody>

        <div style={styles.footer} onClick={() => alert("Forgot Password?")}>
          Forgot Password?
        </div>
      </div>
    </div>
  );
};

export default Auth;
