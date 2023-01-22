const express = require("express");
const port = 4000;
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Student = require("./models/model.student");
const uri = process.env.STRING_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

mongoose
  .connect(uri)
  .then((result) => {
    console.log("Connexion a la DB avec succes");
    app.listen(port, () => {
      console.log(`The server runing on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Student router
app.get("/", (req, res) => {
  Student.find()
    .then((result) => {
      res.render("index", { students: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/add", (req, res) => {
  res.render("addStudent");
});

app.post("/add", (req, res) => {
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
});
