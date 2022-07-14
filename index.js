const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("hello from port 4000")
})

app.listen(4000,()=>{
    console.log("listening on port 4000");
})