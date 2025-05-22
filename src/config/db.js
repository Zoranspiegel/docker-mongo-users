const mongoose = require("mongoose");

// PERSONAL MONGO_DB
// mongodb+srv://zoranspiegel:Q1w2e3r4t5y6u7@a30l14n.uk1f40m.mongodb.net/chanchito-app?retryWrites=true&w=majority

// DOCKER IMAGE MONGO_DB
// "mongodb://aeolian:Q1w2e3r4t5@localhost:27017/chanchito-app?authSource=admin"

async function connectMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://zoranspiegel:Q1w2e3r4t5y6u7@a30l14n.uk1f40m.mongodb.net/chanchito-app?retryWrites=true&w=majority"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error");
    process.exit(1);
  }
}

module.exports = connectMongoDB;
