import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Users, LogOut, Search, GraduationCap, Calendar, User, ChevronRight } from 'lucide-react';
import API from '../api/axios';

const Dashboard = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const res = await API.get('/teachers');
                const data = Array.isArray(res.data) ? res.data : (res.data.data || []);
                setTeachers(data);
            } catch (err) {
                console.error("API Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchTeachers();
    }, []);

    if (loading) return (
        <div className="h-screen bg-navy-deep flex items-center justify-center text-teal-accent font-bold text-xl animate-pulse">
            Loading Teacher Community...
        </div>
    );

    return (
        <div className="flex h-screen bg-navy-deep font-sans text-white overflow-hidden">
            {/* SIDEBAR */}
            <aside className="w-64 bg-navy-card border-r border-white/5 p-8 flex flex-col justify-between hidden md:flex">
                <div className="space-y-12">
                    <div className="text-teal-accent font-black text-2xl tracking-tighter italic">FACULTY</div>
                    <nav className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-teal-accent/10 text-teal-accent rounded-2xl cursor-pointer">
                            <LayoutDashboard size={20} /> <span className="font-bold">Dashboard</span>
                        </div>
                       
                    </nav>
                </div>
                <button onClick={() => { localStorage.clear(); window.location.href='/login'; }} className="flex items-center gap-3 p-4 text-rose-400 hover:bg-rose-400/10 rounded-2xl transition-all font-bold">
                    <LogOut size={20} /> Logout
                </button>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 overflow-y-auto p-8 md:p-12">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight">Teacher Directory</h2>
                        <p className="text-slate-400 mt-1 font-medium">Manage {teachers.length} registered faculty members</p>
                    </div>
                    <div className="relative group w-full md:w-96">
                        <Search className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-teal-accent transition-colors" size={20} />
                        <input type="text" placeholder="Search community..." className="w-full bg-navy-card border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-teal-accent transition-all shadow-xl" />
                    </div>
                </header>

                {/* ROW LIST (Replaces your <table>) */}
                <div className="space-y-4">
                    {teachers.map((t, index) => (
                        <div key={index} className="group flex flex-col md:flex-row items-center justify-between bg-navy-card p-6 rounded-3xl border border-white/5 hover:border-teal-accent/40 hover:bg-[#00316d] transition-all cursor-pointer shadow-lg hover:translate-x-1">
                            {/* Profile Info */}
                            <div className="flex items-center gap-6 w-full md:w-1/3 mb-4 md:mb-0">
                                <div className="w-14 h-14 bg-navy-deep border border-white/10 rounded-2xl flex items-center justify-center text-lg font-bold text-teal-accent">
                                    {t.first_name.charAt(0)}{t.last_name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold group-hover:text-teal-accent transition-colors">{t.first_name} {t.last_name}</h3>
                                    <p className="text-slate-400 text-sm font-medium">{t.email}</p>
                                </div>
                            </div>

                            {/* Details Info */}
                            <div className="flex flex-wrap gap-8 text-sm text-slate-300 w-full md:w-1/3 justify-center md:justify-start">
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="text-teal-accent" size={18} />
                                    <span>{t.university_name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="text-teal-accent" size={18} />
                                    <span>{t.year_joined}</span>
                                </div>
                            </div>

                            {/* Status/Action */}
                            <div className="flex items-center gap-4 w-full md:w-1/3 justify-end">
                                <div className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${t.gender === 'Male' ? 'text-blue-400 bg-blue-400/10 border-blue-400/20' : 'text-pink-400 bg-pink-400/10 border-pink-400/20'}`}>
                                    {t.gender}
                                </div>
                                <ChevronRight className="text-slate-600 group-hover:text-teal-accent group-hover:translate-x-1 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;