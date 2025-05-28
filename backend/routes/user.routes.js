const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");


// authentication routes

// route for user signup
router.post("/signup", authController.signUp);

// route for user login
router.post("/login", authController.login);

// route for user logout
router.get("/logout", authController.logout);

// route for checking mail
router.post("/checkmail", authController.checkEmail);



// export router
module.exports = router