const express = require("express");
const bcrypt = require("bcrypt");
const { Student } = require("../models/studentModel");
const router = express.Router();

const registerStudent = async (req, res) => {
  let student = await Student.findOne({
    $or: [{ id: req.body.id }, { email: req.body.email }],
  });
  if (student) return res.status(400).send("Student Already Registered!");
  student = new Student(req.body);
  const passSalt = await bcrypt.genSalt(10);
  student.password = await bcrypt.hash(student.password, passSalt);
  try {
    const newStudent = await student.save();
    res.send(newStudent);
  } catch (error) {
    const errMessage = [];
    for (field in error.errors) {
      errMessage.push(error.errors[field].message);
    }
    res.send(errMessage);
  }
};

router.route("/").post(registerStudent);

module.exports = router;
