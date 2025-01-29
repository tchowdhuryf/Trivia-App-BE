const express = require("express");
const triviaCTRL = require("../controllers/triviaControllers.js");
const router = express.Router();

router.route("/categories").get(triviaCTRL.readAllCategories);

router
  .route("/categories/:category")
  .get(triviaCTRL.readAllQuestions)
  .post(triviaCTRL.createQuestion);

router
  .route("/categories/:category/:id")
  .get(triviaCTRL.readOneQuestion)
  .patch(triviaCTRL.updateQuestion)
  .delete(triviaCTRL.deleteQuestion);

module.exports = router;
