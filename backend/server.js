const express = require("express");
const app = express();
const connectDB = require("./config/db");

//connnect database
connectDB();

app.get("/", (req, res) => {
  res.send("welcome todo app");
});

app.use(express.json({ extended: true }));

// routes

app.use("/api/todos", require("./routes/todoRoute"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
