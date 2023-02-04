const orgRouter = require("express").Router();
const {RegisterOrg, LoginOrg} = require("../controllers/org");

orgRouter.post('/register',RegisterOrg);
orgRouter.post('/login',LoginOrg)

module.exports = orgRouter;