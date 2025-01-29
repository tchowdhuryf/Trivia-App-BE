const Trivia = require("../models/triviaSchema.js");

// Create a question-----------------------------------------------------

// Read all categories---------------------------------------------------
async function readAllCategories(req, res) {
  try {
    const triviaData = await Trivia.findOne();
    if (!triviaData) {
      return res.status(404).json({ error: "No data found" });
    }

    const categories = triviaData.categories.map((cat) => cat.name);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Read all questions----------------------------------------------------
async function readAllQuestions(req, res) {
  const { category } = req.params;

  try {
    console.log(category);
    const triviaData = await Trivia.findOne({
      "categories.name": category,
    });

    if (!triviaData) {
      return res.status(404).json({ error: "Category not found" });
    }

    const selectedCategory = triviaData.categories.find(
      (cat) => cat.name === category
    );
    if (!selectedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(selectedCategory.questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Read one question-----------------------------------------------------

// Update a question-----------------------------------------------------

// Delete a question-----------------------------------------------------

module.exports = { readAllCategories, readAllQuestions };
