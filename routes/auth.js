const express = require("express");
const router = express.Router();

const authContorller = require("../controllers/auth");

router.get("/login", authContorller.getLogin);

router.get("/signup", authContorller.getSignup);

router.post("/login", authContorller.postLogin);

router.post("/signup", authContorller.postSignup);

router.post("/logout", authContorller.postLogout);

router.get("/reset", authContorller.getReset);

router.post("/reset", authContorller.postReset);

router.get("/reset/:token", authContorller.getNewPassword);

router.post("/new-password", authContorller.postNewPassword);

module.exports = router;
