const coreRouter = require("express").Router();
const {RegisterCore, GetAllUsers} = require("../controllers/core");



coreRouter.post('/register',RegisterCore);
coreRouter.get('/all',GetAllUsers)

module.exports = coreRouter;