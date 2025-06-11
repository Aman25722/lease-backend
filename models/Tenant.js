const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  roomNumber: { type: String, required: true },
  rentAmount: { type: Number, required: true },
  buildingId: { type: mongoose.Schema.Types.ObjectId, ref: "Building", required: true },
  photoUrl: String,
  idProofUrl: String
}, { timestamps: true });

module.exports = mongoose.model("Tenant", tenantSchema);