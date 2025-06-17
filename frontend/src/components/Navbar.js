import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Job Tracker</h1>
      <div className="space-x-4">
        <button onClick={() => navigate('/')} className="hover:underline">Dashboard</button>
        <button onClick={() => navigate('/add-job')} className="hover:underline">Add Job</button>
        <button onClick={logout} className="hover:underline">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
