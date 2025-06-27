const Tenant = require("../models/tenant");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, phone, roomId, rent, photoUrl, idUrl } = req.body;

  if (!name || !phone || !roomId || !rent) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const tenant = new Tenant({ name, phone, roomId, rent, photoUrl, idUrl });
    await tenant.save();
    res.status(201).json(tenant);
  } catch (err) {
    console.error("Error saving tenant:", err);
    res.status(500).json({ error: "Failed to save tenant" });
  }
});

router.get("/room/:roomId", async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const tenants = await Tenant.find({ roomId });
    res.status(200).json(tenants);
  } catch (error) {
    console.error("Failed to fetch tenants by room ID:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;