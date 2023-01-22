const express = require("express");
const port = 4000;
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const studentRouter = require("./route/student.route");
const uri = process.env.STRING_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.use("/", studentRouter);

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
