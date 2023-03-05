const express = require("express");
const { body } = require("express-validator/check");
const isAuth = require("../middleware/is-auth");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/products", isAuth, adminController.getProducts);

router.get("/add-product", isAuth, adminController.getAddProduct);

router.post(
  "/add-product",
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Title must be of atleast 3 characters"),
    body("price").isFloat().withMessage("Enter the valid Price"),
    body("description")
      .isLength({ min: 3, max: 500 })
      .withMessage(
        "Description must contain at least 3 characters and at max 500 characters"
      ),
  ],
  isAuth,
  adminController.postAddProducts
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Title must be of atleast 3 characters"),
    body("price").isFloat().withMessage("Enter the valid Price"),
    body("description")
      .isLength({ min: 3, max: 500 })
      .withMessage(
        "Description must contain at least 3 characters and at max 500 characters"
      ),
  ],
  isAuth,
  adminController.postEditProduct
);

router.delete("/product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;
