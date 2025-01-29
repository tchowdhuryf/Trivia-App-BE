//starter data
const StarterTriviaData = {
  categories: {
    sports: [
      {
        id: 1,
        question:
          "In golf, what name is given to a hole score of two under par?",
        options: ["Eagle", "Birdie", "Bogey", "Albatross"],
        answer: "Eagle",
      },
      {
        id: 2,
        question: "Which team won the 2015-16 English Premier League?",
        options: [
          "Leicester City",
          "Liverpool",
          "Chelsea",
          "Manchester United",
        ],
        answer: "Leicester City",
      },
      {
        id: 3,
        question: "What is the name of Manchester United's home stadium?",
        options: [
          "Old Trafford",
          "Anfield",
          "City of Manchester Stadium",
          "St James Park",
        ],
        answer: "Old Trafford",
      },
      {
        id: 4,
        question:
          "What team did England beat to win in the 1966 World Cup final?",
        options: ["West Germany", "Soviet Union", "Portugal", "Brazil"],
        answer: "West Germany",
      },
      {
        id: 5,
        question:
          "Which city did the former NHL team 'The Nordiques' originate from?",
        options: ["Quebec City", "Houston", "Montreal", "New York"],
        answer: "Quebec City",
      },
      {
        id: 6,
        question:
          "Which boxer was banned for taking a bite out of Evander Holyfield's ear in 1997?",
        options: [
          "Mike Tyson",
          "Roy Jones Jr.",
          "Evander Holyfield",
          "Lennox Lewis",
        ],
        answer: "Mike Tyson",
      },
      {
        id: 7,
        question:
          "Which African American is in part responsible for integrating Major League baseball?",
        options: [
          "Jackie Robinson",
          "Curt Flood",
          "Roy Campanella",
          "Satchell Paige",
        ],
        answer: "Jackie Robinson",
      },
      {
        id: 8,
        question: "Who won the 2017 Formula One World Drivers' Championship?",
        options: [
          "Lewis Hamilton",
          "Sebastian Vettel",
          "Nico Rosberg",
          "Max Verstappen",
        ],
        answer: "Lewis Hamilton",
      },
      {
        id: 9,
        question:
          "This Canadian television sportscaster is known for his 'Hockey Night in Canada' role, a commentary show during hockey games.",
        options: ["Don Cherry", "Ron MacLean", "Don McKellar", "Don Taylor"],
        answer: "Don Cherry",
      },
      {
        id: 10,
        question:
          "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
        options: [
          "Leicester City",
          "Tottenham Hotspur",
          "Watford",
          "Stoke City",
        ],
        answer: "Leicester City",
      },
    ],
    history: [
      {
        id: 1,
        question:
          "Which one of these was not a beach landing site in the Invasion of Normandy?",
        options: ["Silver", "Gold", "Juno", "Sword"],
        answer: "Silver",
      },
      {
        id: 2,
        question: "What country joined the EU in 2013?",
        options: ["Croatia", "Bulgaria", "Slovenia", "Turkey"],
        answer: "Croatia",
      },
      {
        id: 3,
        question: "In 1453, which important city fell?",
        options: ["Constantinople", "Athens", "Rome", "Hamburg"],
        answer: "Constantinople",
      },
      {
        id: 4,
        question: "Who discovered Penicillin?",
        options: [
          "Alexander Flemming",
          "Marie Curie",
          "Alfred Nobel",
          "Louis Pasteur",
        ],
        answer: "Alexander Flemming",
      },
      {
        id: 5,
        question: "The idea of Socialism was articulated and advanced by whom?",
        options: [
          "Karl Marx",
          "Vladimir Lenin",
          "Joseph Stalin",
          "Vladimir Putin",
        ],
        answer: "Karl Marx",
      },
      {
        id: 6,
        question: "How long did World War II last?",
        options: ["6 years", "4 years", "5 years", "7 years"],
        answer: "6 years",
      },
      {
        id: 7,
        question:
          "Which of the following countries was not an axis power during World War II?",
        options: ["Soviet Union", "Italy", "Germany", "Japan"],
        answer: "Soviet Union",
      },
      {
        id: 8,
        question: "What was William Frederick Cody better known as?",
        options: [
          "Buffalo Bill",
          "Billy the Kid",
          "Wild Bill Hickok",
          "Pawnee Bill",
        ],
        answer: "Buffalo Bill",
      },
      {
        id: 9,
        question: "How was Socrates executed?",
        options: ["Poison", "Decapitation", "Firing squad", "Crucifixion"],
        answer: "Poison",
      },
      {
        id: 10,
        question:
          "Which of the following was Brazil was a former colony under?",
        options: ["Portugal", "Spain", "The Netherlands", "France"],
        answer: "Portugal",
      },
    ],
    geography: [
      {
        id: 1,
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        answer: "Madrid",
      },
      {
        id: 2,
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        answer: "Ottawa",
      },
      {
        id: 3,
        question: "What is the capital of Australia?",
        options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
        answer: "Canberra",
      },
      {
        id: 4,
        question: "What is the capital of New Zealand?",
        options: ["Wellington", "Auckland", "Christchurch", "Hamilton"],
        answer: "Wellington",
      },
      {
        id: 5,
        question: "What is the capital of South Africa?",
        options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
        answer: "Pretoria",
      },
      {
        id: 6,
        question: "What is the capital of Brazil?",
        options: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"],
        answer: "Brasilia",
      },
      {
        id: 7,
        question: "What is the capital of India?",
        options: ["New Delhi", "Mumbai", "Bangalore", "Hyderabad"],
        answer: "New Delhi",
      },
      {
        id: 8,
        question: "What is the capital of China?",
        options: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
        answer: "Beijing",
      },
      {
        id: 9,
        question: "What is the capital of Russia?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
        answer: "Moscow",
      },
      {
        id: 10,
        question: "What is the capital of France?",
        options: ["Paris", "Marseille", "Lyon", "Toulouse"],
        answer: "Paris",
      },
    ],
    science: [
      {
        id: 1,
        question: "What is the powerhouse of the cell?",
        options: [
          "Mitochondria",
          "Ribosome",
          "Nucleus",
          "Endoplasmic Reticulum",
        ],
        answer: "Mitochondria",
      },
      {
        id: 2,
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Liver", "Heart", "Lungs"],
        answer: "Skin",
      },
      {
        id: 3,
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Go", "Gl"],
        answer: "Au",
      },
      {
        id: 4,
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Steel", "Iron", "Titanium"],
        answer: "Diamond",
      },
      {
        id: 5,
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Earth"],
        answer: "Jupiter",
      },
      {
        id: 6,
        question: "What is the smallest bone in the human body?",
        options: ["Stapes", "Femur", "Tibia", "Fibula"],
        answer: "Stapes",
      },
      {
        id: 7,
        question: "What is the rarest blood type?",
        options: ["AB-Negative", "O-Negative", "A-Negative", "B-Negative"],
        answer: "AB-Negative",
      },
      {
        id: 8,
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        answer: "Nitrogen",
      },
      {
        id: 9,
        question: "What is the largest mammal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
      },
      {
        id: 10,
        question: "What is the rarest element in the earth's crust?",
        options: ["Astatine", "Francium", "Radium", "Plutonium"],
        answer: "Astatine",
      },
    ],
    technology: [
      {
        id: 1,
        question: "Who is known as the father of the computer?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage",
      },
      {
        id: 2,
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Personal Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
      {
        id: 3,
        question:
          "Which programming language is often used for AI and Machine Learning?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: "Python",
      },
      {
        id: 4,
        question: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "Hyperlink Transfer Protocol",
          "Hyperlink Transmission Process",
          "High-Level Text Transfer Protocol",
        ],
        answer: "HyperText Transfer Protocol",
      },
      {
        id: 5,
        question: "Which company developed the first iPhone?",
        options: ["Apple", "Samsung", "Nokia", "Google"],
        answer: "Apple",
      },
      {
        id: 6,
        question:
          "What is the name of the first electronic general-purpose computer?",
        options: ["ENIAC", "UNIVAC", "IBM 360", "Colossus"],
        answer: "ENIAC",
      },
      {
        id: 7,
        question: "What is the name of Elon Musk's space exploration company?",
        options: ["SpaceX", "Blue Origin", "NASA", "Virgin Galactic"],
        answer: "SpaceX",
      },
      {
        id: 8,
        question: "What does GPU stand for?",
        options: [
          "Graphics Processing Unit",
          "General Processing Unit",
          "Graphical Performance Utility",
          "Great Processing Unit",
        ],
        answer: "Graphics Processing Unit",
      },
      {
        id: 9,
        question: "Which tech company is known for its Pixel smartphones?",
        options: ["Google", "Apple", "Samsung", "Sony"],
        answer: "Google",
      },
      {
        id: 10,
        question: "What does the acronym 'AI' stand for in technology?",
        options: [
          "Artificial Intelligence",
          "Automated Interface",
          "Advanced Information",
          "Artificial Internet",
        ],
        answer: "Artificial Intelligence",
      },
    ],
    mythology: [
      {
        id: 1,
        question: "Who is the king of the Greek gods?",
        options: ["Zeus", "Poseidon", "Hades", "Apollo"],
        answer: "Zeus",
      },
      {
        id: 2,
        question: "Which Norse god is known as the god of thunder?",
        options: ["Thor", "Odin", "Loki", "Baldur"],
        answer: "Thor",
      },
      {
        id: 3,
        question: "What is the name of the Egyptian god of the underworld?",
        options: ["Osiris", "Anubis", "Ra", "Set"],
        answer: "Osiris",
      },
      {
        id: 4,
        question:
          "Who is the Roman counterpart of the Greek goddess Aphrodite?",
        options: ["Venus", "Juno", "Minerva", "Diana"],
        answer: "Venus",
      },
      {
        id: 5,
        question:
          "In Greek mythology, who stole fire from the gods and gave it to humans?",
        options: ["Prometheus", "Hermes", "Hephaestus", "Hercules"],
        answer: "Prometheus",
      },
      {
        id: 6,
        question:
          "What is the name of the legendary one-eyed giants in Greek mythology?",
        options: ["Cyclopes", "Titans", "Gorgons", "Centaurs"],
        answer: "Cyclopes",
      },
      {
        id: 7,
        question: "Which Hindu deity is known as the destroyer?",
        options: ["Shiva", "Vishnu", "Brahma", "Krishna"],
        answer: "Shiva",
      },
      {
        id: 8,
        question:
          "According to Norse mythology, what is the name of the end of the world?",
        options: ["Ragnarok", "Valhalla", "Asgard", "Midgard"],
        answer: "Ragnarok",
      },
      {
        id: 9,
        question: "Who is the Greek goddess of wisdom?",
        options: ["Athena", "Artemis", "Hera", "Demeter"],
        answer: "Athena",
      },
      {
        id: 10,
        question:
          "Which mythological bird is known for rising from its own ashes?",
        options: ["Phoenix", "Griffin", "Pegasus", "Roc"],
        answer: "Phoenix",
      },
    ],
  },
};

module.exports = StarterTriviaData;
