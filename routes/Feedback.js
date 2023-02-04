const Frouter = require("express").Router();
const {SaveFeedback, CreateQR} = require("../controllers/feedback");

Frouter.post('/save',SaveFeedback);
Frouter.post('/create',CreateQR);

module.exports = Frouter;