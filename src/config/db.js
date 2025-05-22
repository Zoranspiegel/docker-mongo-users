const mongoose = require("mongoose");

async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error");
    process.exit(1);
  }
}

module.exports = connectMongoDB;
