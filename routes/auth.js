const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator/check");
const authContorller = require("../controllers/auth");
const User = require("../models/user");

router.get("/login", authContorller.getLogin);

router.get("/signup", authContorller.getSignup);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid E-mail address"),
    body("password", "Please enter valid Password ")
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
  ],
  authContorller.postLogin
);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter the valid Email Address")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "E-mail already exists, please select a different E-mail"
            );
          }
        });
      }),
    body(
      "password",
      "Please enter the Password with only text and numbers, and with at least 5 characters"
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Confirmed Password must match");
        }
        return true;
      }),
  ],
  authContorller.postSignup
);

router.post("/logout", authContorller.postLogout);

router.get("/reset", authContorller.getReset);

router.post("/reset", authContorller.postReset);

router.get("/reset/:token", authContorller.getNewPassword);

router.post("/new-password", authContorller.postNewPassword);

module.exports = router;
