const quizData = [
  // General Knowledge - Easy
  {
    category: "general knowledge",
    difficulty: "easy",
    questions: [
      {
        question: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
        explanation: "Paris is the capital and most populous city of France.",
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
        explanation:
          "Mars is often called the Red Planet due to its reddish appearance, which is caused by iron oxide (rust) on its surface.",
      },
      {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: 1,
        explanation:
          "The Blue Whale is the largest animal known to have ever existed, reaching lengths of up to 100 feet and weights of up to 200 tons.",
      },
      {
        question: "How many continents are there on Earth?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: 2,
        explanation:
          "There are seven continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.",
      },
      {
        question: "Which of these is not a primary color?",
        answers: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: 3,
        explanation:
          "In the RGB color model used for digital displays, the primary colors are Red, Green, and Blue. Yellow is a secondary color created by mixing red and green light.",
      },
      {
        question: "What is the chemical symbol for gold?",
        answers: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2,
        explanation: "The chemical symbol for gold is Au, which comes from the Latin word 'aurum'.",
      },
      {
        question: "Which country is home to the kangaroo?",
        answers: ["New Zealand", "South Africa", "Australia", "Brazil"],
        correctAnswer: 2,
        explanation: "Kangaroos are native to Australia and are one of the country's most recognizable symbols.",
      },
      {
        question: "What is the largest organ in the human body?",
        answers: ["Heart", "Liver", "Brain", "Skin"],
        correctAnswer: 3,
        explanation: "The skin is the largest organ of the human body, covering about 20 square feet in adults.",
      },
      {
        question: "Which of these is not a fruit?",
        answers: ["Tomato", "Cucumber", "Carrot", "Avocado"],
        correctAnswer: 2,
        explanation:
          "Carrots are root vegetables, not fruits. Botanically speaking, tomatoes, cucumbers, and avocados are all fruits.",
      },
      {
        question: "How many sides does a hexagon have?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: 1,
        explanation: "A hexagon has six sides. The prefix 'hex-' comes from the Greek word for six.",
      },
    ],
  },

  // General Knowledge - Medium
  {
    category: "general knowledge",
    difficulty: "medium",
    questions: [
      {
        question: "Which element has the chemical symbol 'Au'?",
        answers: ["Silver", "Gold", "Aluminum", "Argon"],
        correctAnswer: 1,
        explanation: "Au is the chemical symbol for Gold, derived from the Latin word 'aurum'.",
      },
      {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: 2,
        explanation: "The Mona Lisa was painted by Leonardo da Vinci in the early 16th century.",
      },
      {
        question: "Which country has the largest population in the world?",
        answers: ["India", "United States", "China", "Russia"],
        correctAnswer: 2,
        explanation: "China has the largest population in the world, with over 1.4 billion people.",
      },
      {
        question: "In which year did World War II end?",
        answers: ["1943", "1945", "1947", "1950"],
        correctAnswer: 1,
        explanation: "World War II ended in 1945 with the surrender of Germany in May and Japan in September.",
      },
      {
        question: "What is the capital of Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2,
        explanation: "Canberra is the capital city of Australia, not Sydney or Melbourne as many people think.",
      },
      {
        question: "Which of these scientists developed the theory of general relativity?",
        answers: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Marie Curie"],
        correctAnswer: 1,
        explanation: "Albert Einstein developed the theory of general relativity, which was published in 1915.",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Diamond", "Titanium", "Platinum", "Quartz"],
        correctAnswer: 0,
        explanation:
          "Diamond is the hardest known natural material on Earth, scoring 10 on the Mohs scale of mineral hardness.",
      },
      {
        question: "Which of these is not one of Shakespeare's plays?",
        answers: ["Hamlet", "Macbeth", "Romeo and Juliet", "The Great Gatsby"],
        correctAnswer: 3,
        explanation: "The Great Gatsby is a novel by F. Scott Fitzgerald, not a play by Shakespeare.",
      },
      {
        question: "What is the smallest prime number?",
        answers: ["0", "1", "2", "3"],
        correctAnswer: 2,
        explanation:
          "2 is the smallest prime number. A prime number is a natural number greater than 1 that is not divisible by any number other than 1 and itself.",
      },
      {
        question: "Which ocean is the largest?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
        explanation:
          "The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 30% of the Earth's surface.",
      },
    ],
  },

  // General Knowledge - Hard
  {
    category: "general knowledge",
    difficulty: "hard",
    questions: [
      {
        question: "What is the rarest blood type in humans?",
        answers: ["O negative", "AB negative", "B negative", "A negative"],
        correctAnswer: 1,
        explanation: "AB negative is the rarest blood type, present in only about 0.5% of the population.",
      },
      {
        question: "Who wrote 'War and Peace'?",
        answers: ["Charles Dickens", "Leo Tolstoy", "Fyodor Dostoevsky", "Jane Austen"],
        correctAnswer: 1,
        explanation: "War and Peace was written by Russian author Leo Tolstoy and published between 1865 and 1869.",
      },
      {
        question: "What is the capital of Mongolia?",
        answers: ["Astana", "Ulaanbaatar", "Bishkek", "Tashkent"],
        correctAnswer: 1,
        explanation: "Ulaanbaatar (also spelled Ulan Bator) is the capital and largest city of Mongolia.",
      },
      {
        question: "Which of these elements has the highest atomic number?",
        answers: ["Uranium", "Plutonium", "Californium", "Einsteinium"],
        correctAnswer: 3,
        explanation:
          "Einsteinium has the highest atomic number (99) among these elements. Uranium is 92, Plutonium is 94, and Californium is 98.",
      },
      {
        question: "What is the name of the longest river in the world?",
        answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1,
        explanation:
          "The Nile is traditionally considered the longest river in the world, flowing approximately 6,650 kilometers (4,132 miles).",
      },
    ],
  },
]

export default quizData
