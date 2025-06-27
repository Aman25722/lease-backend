const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  totalRooms: { type: Number, required: true },
  occupiedRooms: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Building", buildingSchema);