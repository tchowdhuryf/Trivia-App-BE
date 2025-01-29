//import trivia schema
const Trivia = require("../models/triviaSchema.js");

// Create a question-----------------------------------------------------
//-----------------------------------------------------------------------
async function createQuestion(req, res) {
  const { category } = req.params;
  const { question, options, answer } = req.body;

  try {
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

    const newQuestion = {
      id: selectedCategory.questions.length + 1,
      question,
      options,
      answer,
    };

    selectedCategory.questions.push(newQuestion);

    await triviaData.save();
    res.json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Read all categories---------------------------------------------------
//-----------------------------------------------------------------------
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
//-----------------------------------------------------------------------
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
//-----------------------------------------------------------------------
async function readOneQuestion(req, res) {
  const { category, id } = req.params;

  try {
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

    const selectedQuestion = selectedCategory.questions.find(
      (question) => question.id === Number(id)
    );

    if (!selectedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json(selectedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a question-----------------------------------------------------
//-----------------------------------------------------------------------
async function updateQuestion(req, res) {
  const { category, id } = req.params;
  const { question, options, answer } = req.body;

  try {
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

    const selectedQuestion = selectedCategory.questions.find(
      (question) => question.id === Number(id)
    );

    if (!selectedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }

    if (question !== undefined) selectedQuestion.question = question;
    if (options !== undefined) selectedQuestion.options = options;
    if (answer !== undefined) selectedQuestion.answer = answer;

    await triviaData.save();
    res.json(selectedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete a question-----------------------------------------------------
//-----------------------------------------------------------------------
async function deleteQuestion(req, res) {
  const { category, id } = req.params;

  try {
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

    const selectedQuestionIndex = selectedCategory.questions.findIndex(
      (question) => question.id === Number(id)
    );

    if (selectedQuestionIndex === -1) {
      return res.status(404).json({ error: "Question not found" });
    }

    selectedCategory.questions.splice(selectedQuestionIndex, 1);

    await triviaData.save();
    res.json({ message: "Question deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  readAllCategories,
  readAllQuestions,
  readOneQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
