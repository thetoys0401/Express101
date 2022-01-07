const express = require('express');
const appController = require("../controllers/appController")
const app = express.Router();

app.get("/",(req,res)=>{
    res.send("Page Root");
});
app.get("login",(req,res)=>{
    res.send("Page Login");
});
app.get("/Product/:id/:Type",(req,res)=>{
    res.send("Page Product id" + req.params.id + "Type is" + req.params.type);
});

app.post("/register",(req,res)=>{
    email = req.body.email;
    fname = req.body.fname;
    tel = req.body.tel;
    res.send("email:"+ email + "\n" + "name :" + fname + "\n" + tel );
});

module.exports = app ;