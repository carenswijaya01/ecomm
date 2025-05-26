const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Routes
router.get("/google", authController.loginWithGoogle);
router.get("/google/callback", authController.googleCallback);

module.exports = router;
