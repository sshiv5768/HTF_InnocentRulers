const userrouter = require("express").Router();
const {AddNewUser, getAdmin, GetAllUsers} = require("../controllers/user")

userrouter.post("/save",AddNewUser);
userrouter.get("/admin",getAdmin);
userrouter.get("/getalluser",GetAllUsers)


module.exports = userrouter;