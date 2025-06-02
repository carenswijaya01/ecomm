var express = require("express");
var router = express.Router();

// Product
const product = require("./product");
router.use("/product", product);

module.exports = router;
