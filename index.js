const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not set");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api/buildings", require("./routes/buildingRoutes"));
app.use("/api/tenants", require("./routes/tenantRoutes"));

// Root test endpoint
app.get("/", (req, res) => {
  res.send("Lease Backend Running ✅");
});

// MongoDB Connection
console.log("🧪 MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });