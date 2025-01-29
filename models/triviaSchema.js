const mongoose = require("mongoose");

//Question Schema
const QuestionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

//Category Schema
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: { type: [QuestionSchema], required: true },
});

//Trivia Schema
const TriviaSchema = new mongoose.Schema({
  categories: { type: [CategorySchema], required: true },
});

//Model linked explicitly to the "trivias" collection
module.exports = mongoose.model("Trivia", TriviaSchema, "trivias");
