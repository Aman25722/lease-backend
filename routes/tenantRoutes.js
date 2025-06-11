const express = require("express");
const router = express.Router();
const Tenant = require("../models/Tenant");

// Create a new tenant
router.post("/", async (req, res) => {
  const { name, phone, roomNumber, rentAmount, buildingId, photoUrl, idProofUrl } = req.body;
  if (!name || !phone || !roomNumber || !rentAmount || !buildingId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const tenant = new Tenant({ name, phone, roomNumber, rentAmount, buildingId, photoUrl, idProofUrl });
    await tenant.save();
    res.status(201).json(tenant);
  } catch (err) {
    res.status(500).json({ error: "Failed to save tenant" });
  }
});

// Get all tenants
router.get("/", async (req, res) => {
  try {
    const tenants = await Tenant.find().populate("buildingId", "name address");
    res.json(tenants);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tenants" });
  }
});

module.exports = router;