const route = require("express").Router();
const { registerUserController } = require("../controllers/authController");

route.post("/register", registerUserController);

module.exports = route;
