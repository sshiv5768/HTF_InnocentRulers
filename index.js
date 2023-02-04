const express = require("express");
const app = express();


const router = require("./routes/Auth");
const userrouter = require("./routes/User");
const hrouter = require("./routes/Hackathon");
const orgRouter = require("./routes/org");
const Frouter = require("./routes/Feedback");
const coreRouter = require("./routes/Core");

require("./db/db")

app.use(express.json());

const port = 5000;



app.use("/api",router);
app.use("/api/user",userrouter);
app.use("/api/hackathon",hrouter);
app.use('/api/org',orgRouter);
app.use('/api/feedback',Frouter);
app.use('/api/core',coreRouter);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})