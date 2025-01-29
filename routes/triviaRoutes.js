const express = require("express");
const triviaCTRL = require("../controllers/triviaControllers.js");
const router = express.Router();

router.route("/categories").get(triviaCTRL.readAllCategories);

router.route("/categories/:category").get(triviaCTRL.readAllQuestions);

router.route("/categories/:category/:id");

module.exports = router;
