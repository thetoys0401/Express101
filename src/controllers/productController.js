exports.getProduct = async (req,res)=>{
    res.send("get all products");
};

exports.getProductId = async (req,res)=>{
    res.send("get products from") + req.params.ProductId;
};
exports.getProductName = async (req,res)=>{
    res.send("get products by" + req.params.ProductName );
};
exports.getProductPrice = async (req,res)=>{
    res.send("get products by" + req.params.ProductPrice );
};

exports.postProductId = async (req,res)=>{
    ProductId = req.body.ProductId;
    ProductName = req.body.ProductName;
    res.send("add a product " + "id : " + ProductId + "," + " Name : " + ProductName);

};

exports.putProductId = async (req,res)=>{
    res.send("edit product by id");
};

exports.patchProductId = async (req,res)=>{
    res.send("edit product by id");
};

exports.deleteProductId = async (req,res)=>{
    res.send("delete product by id");
};





