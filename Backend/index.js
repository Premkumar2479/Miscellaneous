const express = require("express");
const app = express();
const port = 8080;

app.get("/register",(req,res)=>{
    res.send("standard GET responce");
});


app.post("/register",(req,res)=>{
    res.send("standard POST responce");
});


app.listen(port,()=>{
    console.log(`listenings to port ${port}`);
});
