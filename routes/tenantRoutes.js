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

module.exports = router;