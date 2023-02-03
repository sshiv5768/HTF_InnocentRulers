const express = require("express");
const app = express();


const router = require("./routes/Auth");
const userrouter = require("./routes/User");
const hackrouter = require("./routes/Hackathon");


require("./db/db")

app.use(express.json());

const port = 5000;

app.use("/api",router);
app.use("/api/user",userrouter);
app.use("/api/hack",hackrouter);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})