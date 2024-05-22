import React, { useState, useEffect } from "react";
import { Modal, Box, Button, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "./Layout";
import "../../styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginopen, setLoginOpen] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailErrorNone, setEmailNone] = useState(false);
    const [passwordErrorWrong, setPasswordWrong] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            window.location.href = "/dashboard";
        } else if (localStorage === null) {
            window.location.href = "/Login";
        }
    }, []);

    function handleLogin() {
        if (!email || !password) {
            setEmailError(!email);
            setPasswordError(!password);
            return;
        }

        const fetchUsers = axios.get(`http://localhost:1337/viewUsers`);
        const fetchStudents = axios.get(`http://localhost:1337/viewManageStudent`);

        Promise.all([fetchUsers, fetchStudents])
            .then(([usersResponse, studentsResponse]) => {
                const users = usersResponse.data;
                const students = studentsResponse.data;
                const allUsers = [...users, ...students];
                const user = allUsers.find(user => user.Email === email);

                if (user) {
                    if (user.Password === password) {
                        console.log('Login successful');
                        localStorage.setItem('email', email);
                        if (users.includes(user)) {
                            window.location.href = "/dashboard"; // Redirect to the dashboard if user is found in viewUsers
                        } else {
                            window.location.href = "/Student"; // Redirect to the student page if user is found in viewManageStudent
                        }
                    } else {
                        console.log('Incorrect password');
                        setPasswordWrong(true);
                        setEmailNone(false);
                    }
                } else {
                    console.log('User not found');
                    setEmailNone(true);
                    setPasswordWrong(true);
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }

    function handleSignup() {
        setLoginOpen(false);
    }

    return (
        <Layout>
            <div className="loginBody">
                <Modal
                    open={loginopen}
                    aria-labelledby="login-modal-title"
                    aria-describedby="login-modal-description"
                    className="custom-modal"
                >
                    <Box className="login-container">
                        <h2 id="login-modal-title">Admin Login</h2>
                        <TextField
                            label="Email or ID"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                            error={emailError || emailErrorNone}
                            helperText={
                                (emailError && "Email is required") ||
                                (emailErrorNone && "Email not found")
                            }
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                            error={passwordError || passwordErrorWrong}
                            helperText={
                                (passwordError && "Password is required") ||
                                (passwordErrorWrong && "Password is wrong")
                            }
                        />
                        <div className="button-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Button variant="contained" onClick={handleLogin}>
                                Login
                            </Button>
                            <br />
                            <Link to="#" onClick={handleSignup}>No Account? Signup</Link>
                        </div>
                    </Box>
                </Modal>
            </div>
        </Layout>
    );
}

export default Login;
