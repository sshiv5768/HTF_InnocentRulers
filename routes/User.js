const userrouter = require("express").Router();
const {AddNewUser} = require("../controllers/user")

userrouter.post("/save",AddNewUser);

module.exports = userrouter;