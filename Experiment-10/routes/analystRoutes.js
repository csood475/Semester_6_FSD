const express = require("express");
const router = express.Router();
const Analyst = require("../models/Analyst");

// 1. CREATE RECORD
router.post("/", async (req, res) => {
  try {
    const data = await Analyst.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. READ ALL RECORDS
router.get("/", async (req, res) => {
  try {
    const data = await Analyst.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. READ SINGLE RECORD
router.get("/:id", async (req, res) => {
  try {
    const data = await Analyst.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Analyst record not found" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. UPDATE RECORD
router.put("/:id", async (req, res) => {
  try {
    const data = await Analyst.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. DELETE RECORD
router.delete("/:id", async (req, res) => {
  try {
    await Analyst.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Analyst record permanently removed from the Hub." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;