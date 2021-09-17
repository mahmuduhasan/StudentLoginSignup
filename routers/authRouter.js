const express = require("express");
const bcrypt = require("bcrypt");
const { Student } = require("../models/studentModel");
const router = express.Router();

const authStudent = async (req, res) => {
  let existStudent = await Student.findOne({ id: req.body.id });
  if (!existStudent) return res.status(400).send("Invalid ID!");
  let checkPass = await bcrypt.compare(
    req.body.password,
    existStudent.password
  );
  if (!checkPass) return res.status(400).send("Invalid Password!");
  res.send(`Welcome ${existStudent.name}`);
};

router.route("/").post(authStudent);

module.exports = router;
