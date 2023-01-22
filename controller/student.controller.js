const Student = require("../models/model.student");

class StudentController {
  // Page d'accueil
  static getAllUser = (req, res) => {
    Student.find()
      .then((result) => {
        res.render("index", { students: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   Get register Form
  static getRegisterForm = (req, res) => {
    res.render("addStudent");
  };

  //   Insert Student
  static insertStudent = (req, res) => {
    const student = new Student({
      nom: req.body.nom,
      prenom: req.body.prenom,
      tel: req.body.tel,
      email: req.body.email,
    });
    student
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

module.exports = StudentController;
