import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || !('theme' in localStorage);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2.5 rounded-xl border border-white/10 bg-navy-card/50 hover:bg-teal-accent/10 transition-all text-teal-accent"
      title="Toggle Theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} className="text-navy-deep" />}
    </button>
  );
};

export default ThemeToggle;