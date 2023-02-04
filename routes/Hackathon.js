const hrouter = require("express").Router();
const {NewHackathon, GetHackathon, GetAll} = require("../controllers/hack");

hrouter.post('/newhackathon', NewHackathon);

hrouter.post('/getall',GetHackathon)

hrouter.get('/get',GetAll);

module.exports = hrouter;