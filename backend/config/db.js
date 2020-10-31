const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useFindAndModify: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `db connected ${conn.connection.host}`.bgBlue
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
