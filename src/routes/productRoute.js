const express = require('express');
const productController = require("../controllers/productController")
const app = express.Router();

app.get("/",productController.get);

app.get("/:ProductId",productController.getProductId);

app.get("/ProductName/:ProductIdName",productController.getProductIdName);

app.get("/ProductPrice/:ProductPrice",productController.getprice);

app.post("/",productController.post);

app.put("/:ProductId",productController.putProductId);

app.patch("/:ProductId",productController.patchProductId);

app.delete("/:ProductId",productController.deleteProductId);

module.exports = app;
