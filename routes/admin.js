const express = require("express");
const app = express();

const path = require("path");

const router = express.Router();

// importing root directory
const rootDir = require("../helper/helper");

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addproduct.html"));
  // res.render('')
});

router.get("/product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop");
});

module.exports = router;
