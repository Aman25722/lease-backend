const express = require("express");
const router = express.Router();
const Building = require("../models/Building");

// Create a new building
router.post("/", async (req, res) => {
  const { name, address } = req.body;
  if (!name || !address) {
    return res.status(400).json({ error: "Name and address are required" });
  }

  try {
    const building = new Building({ name, address });
    await building.save();
    res.status(201).json(building);
  } catch (err) {
    res.status(500).json({ error: "Failed to save building" });
  }
});

// Get all buildings
router.get("/", async (req, res) => {
  try {
    const buildings = await Building.find();
    res.json(buildings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch buildings" });
  }
});

module.exports = router;