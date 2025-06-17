import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(res.data);
      } catch (err) {
        alert('Failed to fetch jobs');
      }
    };

    fetchJobs();
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center drop-shadow">
            📋 Your Job Applications
          </h2>

          {jobs.length === 0 ? (
            <div className="text-center text-gray-600 mt-20">
              <p className="text-lg">You haven't added any jobs yet.</p>
              <p className="text-sm mt-2">Click "Add Job" in the menu to get started!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
