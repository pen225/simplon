const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const StudentPost = new Schema(
  {
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    tel: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentPost);
module.exports = Student;
