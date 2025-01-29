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

// Read one question-----------------------------------------------------

// Update a question-----------------------------------------------------

// Delete a question-----------------------------------------------------

module.exports = { readAllCategories };
