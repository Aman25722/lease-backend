const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  roomId: { type: String, required: true },
  rent: { type: Number, required: true },
  photoUrl: String,
  idUrl: String
}, { timestamps: true });

module.exports = mongoose.model("Tenant", tenantSchema);