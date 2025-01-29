const mongoose = require("mongoose");
require("dotenv").config();
const Trivia = require("./models/triviaSchema.js");
const StarterTriviaData = require("./data/seedData.js");

// Connect to MongoDB and seed the database-------------------------------------
//------------------------------------------------------------------------------
const connectionString = process.env.MONGO_URI;

async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log("Connected to MongoDB. Seeding data...");

    await Trivia.deleteMany({});
    console.log("Existing data cleared.");

    const categories = Object.keys(StarterTriviaData.categories).map(
      (categoryName) => ({
        name: categoryName,
        questions: StarterTriviaData.categories[categoryName],
      })
    );

    const trivia = new Trivia({ categories });
    await trivia.save();

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
}

seedDatabase();
