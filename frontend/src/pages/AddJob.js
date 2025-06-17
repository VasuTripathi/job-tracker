import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AddJob = () => {
  const [form, setForm] = useState({
    company: '',
    role: '',
    status: 'Applied',
    appliedDate: '',
    notes: '',
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', form, {
        headers: { Authorization: `Bearer ${token}` }, // ✅ fixed
      });
      alert('Job added!');
      navigate('/');
    } catch (err) {
      alert('Failed to add job');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-50 px-4 py-10">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">➕ Add New Job</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Role</label>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
                <option>Accepted</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Applied Date</label>
              <input
                type="date"
                name="appliedDate"
                value={form.appliedDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Optional notes"
                rows="3"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Submit Job
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJob;
