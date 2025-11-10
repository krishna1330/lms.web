import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Card, CardHeader, CardBody, CardActions } from '@progress/kendo-react-layout';
import '@progress/kendo-theme-default/dist/all.css';

const Auth = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const tempErrors = {};
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Please enter a valid email';
        if (!formData.password) tempErrors.password = 'Password is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Fake login for now
            localStorage.setItem('token', 'fakeToken');
            navigate('/dashboard'); // ✅ Redirect to Manager Dashboard
        }
    };

    const styles = {
        pageContainer: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom, #f9f9f9, #eaeaea)',
            fontFamily: "'Segoe UI', sans-serif",
        },
        projectTitle: {
            color: '#1976d2',
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '25px',
            letterSpacing: '1px',
        },
        card: {
            width: 420,
            padding: '30px 45px',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
            background: '#ffffff',
        },
        title: {
            textAlign: 'center',
            marginBottom: '25px',
            color: '#1976d2',
            fontWeight: 600,
            fontSize: '1.3rem',
        },
        field: {
            marginBottom: '22px',
        },
        input: {
            fontSize: '1rem',
            height: '48px',
        },
        error: {
            color: '#d32f2f',
            fontSize: '0.85rem',
            marginTop: '5px',
        },
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.projectTitle}>LMS</div>

            <Card style={styles.card}>
                <CardHeader>
                    <h2 style={styles.title}>Login</h2>
                </CardHeader>

                <CardBody>
                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div style={styles.field}>
                            <Input
                                name="email"
                                type="email"
                                label="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                            {errors.email && <div style={styles.error}>{errors.email}</div>}
                        </div>

                        {/* Password Field */}
                        <div style={styles.field}>
                            <Input
                                name="password"
                                type="password"
                                label="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                            {errors.password && <div style={styles.error}>{errors.password}</div>}
                        </div>

                        <CardActions>
                            <Button
                                themeColor="primary"
                                type="submit"
                                style={{
                                    width: '100%',
                                    height: '46px',
                                    marginTop: '10px',
                                    fontSize: '1rem',
                                }}
                            >
                                Login
                            </Button>
                        </CardActions>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Auth;
