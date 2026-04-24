const mongoose = require("mongoose");

const analystSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailId: { type: String, required: true },
  primarySkill: { type: String, required: true },
  experienceYears: { type: Number, required: true }
}, { timestamps: true }); 

module.exports = mongoose.model("Analyst", analystSchema);