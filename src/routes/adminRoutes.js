const express = require('express');
const app = express.Router();

app.get("/admin",(req,res)=>{
    res.send("Page Root");
});
app.get("/admin/login",(req,res)=>{
    res.send("Admin Login");
});


app.post("/admin/register",(req,res)=>{
    res.send("Admin register");
});

module.exports = app ;