const express = require("express");

const path = require("path");

const app = express();

const router = express.Router();

// importing root directory
const rootDir = require("../helper/helper");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

module.exports = router;
