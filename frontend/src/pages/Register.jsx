import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, School, Calendar, ArrowRight, Users } from 'lucide-react';
import API from '../api/axios';

export default function Register() {
    const [formData, setFormData] = useState({
        email: '', first_name: '', last_name: '', password: '',
        university_name: '', gender: 'Male', year_joined: 2026
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/register', formData);
            alert("Success! Please login now.");
            navigate('/login');
        } catch (err) {
            alert("Registration failed. Check if email is unique.");
        }
    };

    return (
        <div className="min-h-screen bg-navy-deep flex items-center justify-center p-6">
            <div className="bg-navy-card w-full max-w-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-teal-accent text-navy-deep rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                        <Users size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Teacher Registration</h2>
                    <p className="text-slate-400 mt-2">Join our professional educator community</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="bg-navy-input border border-white/10 rounded-xl p-4 text-white outline-none focus:border-teal-accent transition-all" onChange={e => setFormData({...formData, first_name: e.target.value})} required />
                        <input type="text" placeholder="Last Name" className="bg-navy-input border border-white/10 rounded-xl p-4 text-white outline-none focus:border-teal-accent transition-all" onChange={e => setFormData({...formData, last_name: e.target.value})} required />
                    </div>

                    <input type="email" placeholder="Email Address" className="w-full bg-navy-input border border-white/10 rounded-xl p-4 text-white outline-none focus:border-teal-accent" onChange={e => setFormData({...formData, email: e.target.value})} required />
                    <input type="password" placeholder="Password" className="w-full bg-navy-input border border-white/10 rounded-xl p-4 text-white outline-none focus:border-teal-accent" onChange={e => setFormData({...formData, password: e.target.value})} required />
                    
                    <div className="h-px bg-white/10 my-2"></div>
                    
                    <input type="text" placeholder="University Name" className="w-full bg-navy-input border border-white/10 rounded-xl p-4 text-white outline-none focus:border-teal-accent" onChange={e => setFormData({...formData, university_name: e.target.value})} required />
                    
                    <div className="grid grid-cols-2 gap-4">
                        <select className="bg-navy-input border border-white/10 rounded-xl p-4 text-slate-300 outline-none focus:border-teal-accent" onChange={e => setFormData({...formData, gender: e.target.value})}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="number" placeholder="Year Joined" className="bg-navy-input border border-white/10 rounded-xl p-4 text-white outline-none focus:border-teal-accent" onChange={e => setFormData({...formData, year_joined: e.target.value})} required />
                    </div>

                    <button type="submit" className="w-full bg-teal-accent hover:bg-[#25bca8] text-navy-deep font-bold py-4 rounded-xl flex items-center justify-center gap-2 transform transition-all hover:-translate-y-1 hover:shadow-lg mt-4">
                        Register Account <ArrowRight size={20} />
                    </button>
                </form>
                <p className="text-center text-slate-400 mt-8">Already have an account? <Link to="/login" className="text-teal-accent font-semibold hover:underline">Login</Link></p>
            </div>
        </div>
    );
}