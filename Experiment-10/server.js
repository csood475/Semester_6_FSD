const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware config
app.use(express.json());
app.use(cors());

// MongoDB Connection for Charu
mongoose.connect("mongodb://127.0.0.1:27017/charuDB")
  .then(() => console.log("📊 Analytics Database Connected Successfully!"))
  .catch(err => console.log("DB Connection Failed: ", err));

// Route Setup
const analystRoutes = require("./routes/analystRoutes");
app.use("/api/analysts", analystRoutes);

// Server initialization on port 5001 to avoid clash
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`⚡ Analytics Hub Server running on port ${PORT}`);
});