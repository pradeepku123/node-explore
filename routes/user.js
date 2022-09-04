const express = require("express");
const path = require("path");

const router = express.Router();
router.post("/add", (req, res) => {
  res.status(201).send("POST Object Created");
});

router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../views/user-page.html"));
});

module.exports = router;
