var express = require("express");
var router = express.Router();

// Auth
const auth = require("./auth");
router.use("/auth", auth);

module.exports = router;
