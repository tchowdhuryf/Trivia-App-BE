const express = require("express");
const triviaCTRL = require("../controllers/triviaControllers.js");
const router = express.Router();

router.route("/categories").get(triviaCTRL.readAllCategories);

router.route("/categories/:category/questions")

router.route("/categories/:category/questions/:id");

module.exports = router;
