const path = require("path");
const productsController = require("../controllers/products");
const express = require("express");

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProducts);
module.exports = router;
