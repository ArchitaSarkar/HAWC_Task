import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios'; // Make sure this path to your axios instance is correct

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/login', credentials);
            
            // Success! Store the token in localStorage
            localStorage.setItem('token', res.data.token);
            
            alert("Login Successful!");
            navigate('/dashboard'); // Redirect to your data table
        } catch (err) {
            console.error(err);
            alert("Login failed! Check your email/password or backend connection.");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="auth-form">
                <h2>Teacher Login</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={e => setCredentials({...credentials, email: e.target.value})} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter password" 
                        onChange={e => setCredentials({...credentials, password: e.target.value})} 
                        required 
                    />
                </div>
                <button type="submit" className="btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;