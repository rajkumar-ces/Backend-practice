const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../utilities/path");

router.get("/add-products", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
}); // we can also set the pathway by '../' or '..'
// replacing the pathway = __dirname, ".." to rootDir for path file.

router.post("/add-products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
