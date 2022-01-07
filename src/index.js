const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const appRoutes = require('./routes/appRoutes');
const adminRoutes = require('./routes/adminRoutes');
const productRoute = require('./routes/productRoute');
require("dotdev").config({path:"./config.env"});


const app = express();
const port = process.env.PORT || 4005;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/",appRoutes);
app.use("/admin",adminRoutes);
app.use("/product",productRoute);

app.listen(port,()=>{
    console.log("Runner web at " + port);
})