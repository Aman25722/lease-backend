const express = require("express");
const router = express.Router();
const Building = require("../models/Building");

// Create a new building
router.post("/", async (req, res) => {
  console.log("🔥 Incoming POST /api/buildings");
  console.log("REQ BODY:", req.body);
  console.log("Type of totalRooms:", typeof req.body.totalRooms);
  console.log("Full Request:", JSON.stringify(req.body, null, 2));
  const { name, address, totalRooms } = req.body;
  if (!name || !address || totalRooms === undefined) {
    return res.status(400).json({ error: "Name, address, and totalRooms are required" });
  }

  try {
    const building = new Building({ name, address, totalRooms });
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