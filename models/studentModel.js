const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Student = model(
  "students",
  Schema({
    name: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 30,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 15,
      maxlength: 40,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 1024,
    },
  })
);

module.exports.Student = Student;
