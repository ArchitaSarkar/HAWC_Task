import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';
import API from '../api/axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/login', credentials);
            localStorage.setItem('token', res.data.token);
            alert("Login Successful!");
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            alert("Login failed! Check your credentials.");
        }
    };

    return (
        <div className="min-h-screen bg-navy-deep flex items-center justify-center p-6">
            <div className="bg-navy-card w-full max-w-md p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-accent opacity-5 blur-[80px]"></div>
                
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white">Teacher Login</h2>
                    <p className="text-slate-400 mt-2">Welcome back to your portal</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-4 text-slate-500 group-focus-within:text-teal-accent transition-colors" size={20} />
                            <input type="email" placeholder="Enter email" className="w-full bg-navy-input border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-teal-accent outline-none transition-all" onChange={e => setCredentials({...credentials, email: e.target.value})} required />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-4 text-slate-500 group-focus-within:text-teal-accent transition-colors" size={20} />
                            <input type="password" placeholder="Enter password" className="w-full bg-navy-input border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-teal-accent outline-none transition-all" onChange={e => setCredentials({...credentials, password: e.target.value})} required />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-teal-accent hover:bg-[#25bca8] text-navy-deep font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transform transition-all hover:shadow-[0_10px_20px_rgba(45,212,191,0.2)]">
                        Login <LogIn size={20} />
                    </button>
                </form>
                <p className="text-center text-slate-400 mt-10">Don't have an account? <Link to="/" className="text-teal-accent font-semibold hover:underline">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;