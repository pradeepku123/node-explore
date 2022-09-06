const express = require("express");
const path = require("path");

const { productDetails, addProduct } = require("../utils/product");

const router = express.Router();

router.get("/", (req, res) => {
  const homePageData = {
    pageTitle: `HOME PAGE - Loaded`,
    productDetails,
  };
  res.status(200).render("home-page", homePageData);
});

module.exports = router;
