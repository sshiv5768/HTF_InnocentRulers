const hackrouter = require("express").Router();
const {NewHackathon, GetHackathon} = require("../controllers/hack");

hackrouter.post('/newhackathon', NewHackathon);

hackrouter.post('/gethackathons',GetHackathon)

module.exports = hackrouter;