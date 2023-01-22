const express = require("express");
const studentRouter = express.Router();
const userController = require("../controller/student.controller");

studentRouter.get("/", userController.getAllUser);

studentRouter.get("/add", userController.getRegisterForm);

studentRouter.post("/add", userController.insertStudent);

module.exports = studentRouter;
