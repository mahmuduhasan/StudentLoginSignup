const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentRouter = require("./routers/studentRouter");
const authRouter = require("./routers/authRouter");

mongoose.connect("mongodb://localhost:27017/studentPortal", () => {
  console.log("Student Portal Connected!");
});

app.use(express.json());
app.use("/api/register", studentRouter);
app.use("/api/login", authRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});
