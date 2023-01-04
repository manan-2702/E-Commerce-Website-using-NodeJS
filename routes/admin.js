const path = require("path");
const adminController = require("../controllers/admin");
const express = require("express");

const router = express.Router();

router.get("/products", adminController.getProducts);
router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProducts);
router.get("/edit-product/:productId", adminController.getEditProduct);
router.post("/edit-product", adminController.postEditProduct);
router.post("/delete-product", adminController.postDeleteProduct);
module.exports = router;
