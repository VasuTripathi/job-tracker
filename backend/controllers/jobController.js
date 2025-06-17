const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  const job = new Job({ ...req.body, userId: req.userId });
  await job.save();
  res.status(201).json(job);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find({ userId: req.userId }).sort({ appliedDate: -1 });
  res.json(jobs);
};

exports.updateJob = async (req, res) => {
  const job = await Job.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  await Job.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.status(204).end();
};
