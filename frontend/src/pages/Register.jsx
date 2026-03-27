import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div className="auth-card">
            <h2>Teacher Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
                <input type="text" placeholder="First Name" onChange={e => setFormData({...formData, first_name: e.target.value})} required />
                <input type="text" placeholder="Last Name" onChange={e => setFormData({...formData, last_name: e.target.value})} required />
                <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
                <hr />
                <input type="text" placeholder="University Name" onChange={e => setFormData({...formData, university_name: e.target.value})} required />
                <select onChange={e => setFormData({...formData, gender: e.target.value})}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input type="number" placeholder="Year Joined" onChange={e => setFormData({...formData, year_joined: e.target.value})} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}