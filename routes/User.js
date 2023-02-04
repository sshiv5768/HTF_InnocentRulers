const userrouter = require("express").Router();
const {AddNewUser, getAdmin} = require("../controllers/user")

userrouter.post("/save",AddNewUser);
userrouter.get("/admin",getAdmin);

module.exports = userrouter;