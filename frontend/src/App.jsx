import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register"; // NO curly braces
import Login from "./pages/Login";       // NO curly braces
import Dashboard from "./pages/Dashboard"; // NO curly braces

function App() {
  return (
    <Router>
      <nav style={{ padding: '15px', background: '#1d1b1b', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Register</Link>
        <Link to="/login" style={{ color: '#fff', marginRight: '10px' }}>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;