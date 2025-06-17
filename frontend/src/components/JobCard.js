import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 shadow rounded border">
      <h3 className="text-xl font-semibold">{job.role} @ {job.company}</h3>
      <p>Status: <span className="font-medium">{job.status}</span></p>
      <p>Applied: {new Date(job.appliedDate).toLocaleDateString()}</p>
      {job.notes && <p className="text-sm text-gray-600 mt-2">{job.notes}</p>}
    </div>
  );
};

export default JobCard;
