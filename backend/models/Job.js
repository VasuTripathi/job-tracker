const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: { type: String, enum: ["Applied", "Interview", "Offer", "Rejected", "Accepted"] },
  appliedDate: Date,
  notes: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Job", jobSchema);
