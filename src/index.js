import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import connectDB from "./db/index.js";

console.log("✅ index.js started");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    console.log("✅ Mongo connected, starting server...");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });
