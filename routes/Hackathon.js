const hackrouter = require("express").Router();
const {NewHackathon} = require("../controllers/hack");

hackrouter.post('/newhackathon', NewHackathon);

module.exports = hackrouter;