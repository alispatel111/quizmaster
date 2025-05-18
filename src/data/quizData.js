"use client"

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
      {
        question: "Which scientist formulated the theory of evolution by natural selection?",
        answers: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alexander Fleming"],
        correctAnswer: 1,
        explanation:
          "Charles Darwin published his theory of evolution with compelling evidence in his 1859 book 'On the Origin of Species'.",
      },
      {
        question: "What is the world's oldest known living tree species?",
        answers: ["Giant Sequoia", "Bristlecone Pine", "Ginkgo Biloba", "Olive Tree"],
        correctAnswer: 1,
        explanation:
          "Bristlecone Pines are the oldest known living non-clonal organisms on Earth, with some specimens exceeding 5,000 years of age.",
      },
      {
        question: "Which of these countries was NOT a founding member of the United Nations?",
        answers: ["United States", "Soviet Union", "China", "Japan"],
        correctAnswer: 3,
        explanation:
          "Japan was not a founding member of the UN. It joined in 1956, after World War II occupation ended.",
      },
      {
        question: "What is the only metal that is liquid at room temperature?",
        answers: ["Gallium", "Mercury", "Cesium", "Francium"],
        correctAnswer: 1,
        explanation: "Mercury is the only metal that is liquid at standard room temperature and pressure.",
      },
      {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Irène Joliot-Curie"],
        correctAnswer: 0,
        explanation:
          "Marie Curie was the first woman to win a Nobel Prize, winning the Physics Prize in 1903, and later the Chemistry Prize in 1911.",
      },
    ],
  },

  // JavaScript - Easy
  {
    category: "javascript",
    difficulty: "easy",
    questions: [
      {
        question: "Which of the following is used to declare a variable in JavaScript?",
        answers: ["var", "variable", "v", "int"],
        correctAnswer: 0,
        explanation:
          "In JavaScript, 'var' is one of the keywords used to declare variables, along with 'let' and 'const'.",
      },
      {
        question: "What will console.log(typeof []) output?",
        answers: ["array", "object", "undefined", "null"],
        correctAnswer: 1,
        explanation: "In JavaScript, arrays are actually objects, so typeof [] returns 'object'.",
      },
      {
        question: "Which method is used to add an element to the end of an array?",
        answers: ["push()", "pop()", "append()", "add()"],
        correctAnswer: 0,
        explanation:
          "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
      },
      {
        question: "What is the correct way to write a JavaScript comment?",
        answers: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "Both B and C"],
        correctAnswer: 3,
        explanation: "In JavaScript, you can write single-line comments using // and multi-line comments using /* */.",
      },
      {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        answers: ["==", "===", "=", "!="],
        correctAnswer: 1,
        explanation: "The === operator checks for strict equality, comparing both value and type without conversion.",
      },
      {
        question: "What will console.log(2 + '2') output in JavaScript?",
        answers: ["4", "22", "Error", "NaN"],
        correctAnswer: 1,
        explanation:
          "In JavaScript, when you add a number and a string, the number is converted to a string and concatenated.",
      },
      {
        question: "Which function is used to parse a string to an integer in JavaScript?",
        answers: ["Integer.parse()", "parseInteger()", "parseInt()", "Number.parseInt()"],
        correctAnswer: 2,
        explanation: "The parseInt() function parses a string and returns an integer.",
      },
      {
        question: "What does the isNaN() function do?",
        answers: [
          "Returns true if the value is not a number",
          "Returns false if the value is not a number",
          "Converts a value to a number",
          "Checks if a value is null",
        ],
        correctAnswer: 0,
        explanation: "The isNaN() function determines whether a value is NaN (Not-a-Number) or not.",
      },
      {
        question: "Which method is used to remove the last element from an array?",
        answers: ["pop()", "push()", "shift()", "unshift()"],
        correctAnswer: 0,
        explanation: "The pop() method removes the last element from an array and returns that element.",
      },
      {
        question: "What is the output of console.log(Boolean(0))?",
        answers: ["true", "false", "undefined", "null"],
        correctAnswer: 1,
        explanation: "In JavaScript, 0 is a falsy value, so Boolean(0) returns false.",
      },
    ],
  },

  // JavaScript - Medium
  {
    category: "javascript",
    difficulty: "medium",
    questions: [
      {
        question: "What is the output of: console.log(1 + '1' - 1)?",
        answers: ["1", "11", "10", "NaN"],
        correctAnswer: 2,
        explanation:
          "First, 1 + '1' concatenates to '11' (string), then '11' - 1 converts '11' to number and subtracts 1, resulting in 10.",
      },
      {
        question: "What is a closure in JavaScript?",
        answers: [
          "A way to protect variables from being accessed",
          "A function that has access to variables in its outer lexical environment",
          "A method to close browser windows",
          "A way to end JavaScript execution",
        ],
        correctAnswer: 1,
        explanation:
          "A closure is a function that has access to variables from its outer (enclosing) lexical scope, even after the outer function has returned.",
      },
      {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: ["String", "Boolean", "Float", "Symbol"],
        correctAnswer: 2,
        explanation:
          "Float is not a distinct data type in JavaScript. Numbers in JavaScript are represented as IEEE 754 double-precision floating-point numbers, but the type is simply 'number'.",
      },
      {
        question: "What does the 'this' keyword refer to in JavaScript?",
        answers: [
          "It always refers to the global object",
          "It refers to the object that is executing the current function",
          "It refers to the previous object in the prototype chain",
          "It refers to the DOM element that triggered the event",
        ],
        correctAnswer: 1,
        explanation:
          "In JavaScript, 'this' refers to the object that is executing the current function, but its value depends on how the function is called.",
      },
      {
        question: "What is the purpose of the 'use strict' directive?",
        answers: [
          "To enable strict type checking",
          "To enforce stricter parsing and error handling",
          "To improve performance",
          "To enable new JavaScript features",
        ],
        correctAnswer: 1,
        explanation:
          "'use strict' is a directive that enables strict mode in JavaScript, which enforces stricter parsing and error handling, prevents certain actions, and throws more exceptions.",
      },
      {
        question: "What is the output of: console.log(typeof NaN)?",
        answers: ["NaN", "undefined", "number", "object"],
        correctAnswer: 2,
        explanation:
          "In JavaScript, NaN (Not a Number) is actually of type 'number', which is one of the quirks of the language.",
      },
      {
        question:
          "Which method is used to create a new array with the results of calling a function on every element in the array?",
        answers: ["forEach()", "filter()", "map()", "reduce()"],
        correctAnswer: 2,
        explanation:
          "The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
      },
      {
        question: "What is event bubbling in JavaScript?",
        answers: [
          "A way to handle multiple events at once",
          "The process where an event triggers on the innermost element and propagates outward",
          "A method to prevent events from firing",
          "A technique to improve event performance",
        ],
        correctAnswer: 1,
        explanation:
          "Event bubbling is the process where an event triggers on the deepest target element, and then propagates upward through its ancestors in the DOM tree.",
      },
      {
        question: "What is the purpose of the Promise object in JavaScript?",
        answers: [
          "To handle synchronous operations",
          "To represent a value that might be available now, later, or never",
          "To promise the user that code will execute without errors",
          "To improve code readability",
        ],
        correctAnswer: 1,
        explanation:
          "A Promise is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value.",
      },
      {
        question: "What is the output of: console.log([1, 2, 3] == [1, 2, 3])?",
        answers: ["true", "false", "undefined", "Error"],
        correctAnswer: 1,
        explanation:
          "Arrays are objects in JavaScript, and when comparing objects with ==, it checks if they reference the same object in memory, not if they have the same content.",
      },
    ],
  },

  // JavaScript - Hard
  {
    category: "javascript",
    difficulty: "hard",
    questions: [
      {
        question: "What is the output of: console.log(3 > 2 > 1)?",
        answers: ["true", "false", "undefined", "Error"],
        correctAnswer: 1,
        explanation:
          "This is evaluated as (3 > 2) > 1, which becomes true > 1. When comparing true with a number, true is converted to 1, so it becomes 1 > 1, which is false.",
      },
      {
        question: "What is a WeakMap in JavaScript?",
        answers: [
          "A Map that can only store weak references",
          "A Map with weak security features",
          "A collection of key/value pairs where keys are objects and values can be arbitrary values",
          "A Map that automatically removes entries when memory is low",
        ],
        correctAnswer: 2,
        explanation:
          "A WeakMap is a collection of key/value pairs where the keys must be objects and the values can be arbitrary values. The 'weak' part means that keys are weakly referenced, allowing them to be garbage collected if there are no other references to them.",
      },
      {
        question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
        answers: ["true", "false", "undefined", "Error"],
        correctAnswer: 1,
        explanation:
          "Due to how floating-point numbers are represented in binary, 0.1 + 0.2 actually equals 0.30000000000000004, not exactly 0.3, so the strict equality check returns false.",
      },
      {
        question: "What is the purpose of the Symbol type in JavaScript?",
        answers: [
          "To create unique identifiers",
          "To represent mathematical symbols",
          "To improve code readability",
          "To encrypt sensitive data",
        ],
        correctAnswer: 0,
        explanation:
          "Symbols are a primitive data type introduced in ES6 that are used to create unique identifiers, which helps prevent property name collisions, especially when using objects as dictionaries.",
      },
      {
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        answers: [
          "There is no difference",
          "'let' has block scope while 'var' has function scope",
          "'var' is faster than 'let'",
          "'let' can only be used in ES6 modules",
        ],
        correctAnswer: 1,
        explanation:
          "The key difference is that 'let' has block scope, meaning it's only accessible within the block it's declared in, while 'var' has function scope, meaning it's accessible throughout the function it's declared in.",
      },
      {
        question: "What is the output of: console.log(typeof typeof 1)?",
        answers: ["number", "string", "undefined", "object"],
        correctAnswer: 1,
        explanation:
          "typeof 1 returns 'number', and typeof 'number' returns 'string', because the result of typeof is always a string.",
      },
      {
        question: "What is a generator function in JavaScript?",
        answers: [
          "A function that generates random numbers",
          "A function that can pause execution and resume later",
          "A function that creates other functions",
          "A function that automatically optimizes code",
        ],
        correctAnswer: 1,
        explanation:
          "A generator function is a special type of function that can pause execution using the 'yield' keyword and resume later, allowing for lazy evaluation and custom iteration protocols.",
      },
      {
        question: "What is the purpose of the 'bind' method in JavaScript?",
        answers: [
          "To bind events to DOM elements",
          "To create a new function with a specified 'this' value",
          "To bind variables to a specific scope",
          "To combine multiple functions into one",
        ],
        correctAnswer: 1,
        explanation:
          "The bind() method creates a new function that, when called, has its 'this' keyword set to a specific value, with a given sequence of arguments preceding any provided when the new function is called.",
      },
      {
        question: "What is the output of: console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())?",
        answers: ["baaa", "banana", "baNaNa", "ba+a+a"],
        correctAnswer: 1,
        explanation:
          "'b' + 'a' + + 'a' + 'a' evaluates to 'ba' + (+'a') + 'a'. Since +'a' is NaN (Not a Number), it becomes 'baNaNa', which when converted to lowercase is 'banana'.",
      },
      {
        question: "What is the difference between Object.create(null) and {}?",
        answers: [
          "There is no difference",
          "Object.create(null) creates an object with no prototype",
          "Object.create(null) is faster",
          "{} is not a valid object creation syntax",
        ],
        correctAnswer: 1,
        explanation:
          "Object.create(null) creates an object with no prototype chain, while {} creates an object that inherits from Object.prototype, giving it access to methods like toString(), hasOwnProperty(), etc.",
      },
    ],
  },

  // React - Easy
  {
    category: "react",
    difficulty: "easy",
    questions: [
      {
        question: "What is JSX in React?",
        answers: [
          "A JavaScript library",
          "A syntax extension for JavaScript that looks similar to HTML",
          "A new programming language",
          "A database query language",
        ],
        correctAnswer: 1,
        explanation:
          "JSX is a syntax extension for JavaScript that looks similar to HTML and makes it easier to write and understand React components.",
      },
      {
        question: "What is a React component?",
        answers: ["A JavaScript function", "A reusable piece of UI", "A CSS file", "A database model"],
        correctAnswer: 1,
        explanation:
          "A React component is a reusable piece of UI that can be composed with other components to build complex user interfaces.",
      },
      {
        question: "Which method is used to change state in a React class component?",
        answers: ["this.changeState()", "this.setState()", "this.updateState()", "this.modifyState()"],
        correctAnswer: 1,
        explanation:
          "The setState() method is used to update the state of a React class component, which triggers a re-render of the component.",
      },
      {
        question: "What is the correct way to render a list in React?",
        answers: [
          "Using a for loop inside the render method",
          "Using the map() method to create elements from an array",
          "Using the forEach() method",
          "Using the renderList() method",
        ],
        correctAnswer: 1,
        explanation:
          "In React, the recommended way to render a list is to use the map() method to transform an array of data into an array of JSX elements.",
      },
      {
        question: "What is the virtual DOM in React?",
        answers: [
          "A complete copy of the real DOM",
          "A lightweight JavaScript representation of the real DOM",
          "A new browser technology",
          "A DOM that only exists in memory",
        ],
        correctAnswer: 1,
        explanation:
          "The virtual DOM is a lightweight JavaScript representation of the real DOM that React uses to optimize updates and improve performance.",
      },
      {
        question: "What are props in React?",
        answers: ["Internal component state", "CSS properties", "Properties passed to a component", "HTML attributes"],
        correctAnswer: 2,
        explanation:
          "Props (short for properties) are inputs to React components that are passed from a parent component to a child component.",
      },
      {
        question: "Which hook is used to add state to a functional component?",
        answers: ["useEffect()", "useState()", "useContext()", "useReducer()"],
        correctAnswer: 1,
        explanation: "The useState() hook allows you to add state to functional components in React.",
      },
      {
        question: "What is the default direction of data flow in React?",
        answers: [
          "Bidirectional",
          "Top to bottom (parent to child)",
          "Bottom to top (child to parent)",
          "Left to right",
        ],
        correctAnswer: 1,
        explanation:
          "React follows a unidirectional data flow, where data flows from parent components down to child components through props.",
      },
      {
        question: "What is the purpose of the key prop when rendering a list of elements?",
        answers: [
          "It's required for styling list items",
          "It helps React identify which items have changed, been added, or removed",
          "It sets the order of elements",
          "It's used for encryption",
        ],
        correctAnswer: 1,
        explanation:
          "The key prop is a special attribute that helps React identify which items have changed, been added, or removed from a list, which improves rendering performance.",
      },
      {
        question: "What is the purpose of React fragments?",
        answers: [
          "To create animations",
          "To group multiple elements without adding an extra node to the DOM",
          "To split components into smaller pieces",
          "To improve performance",
        ],
        correctAnswer: 1,
        explanation:
          "React fragments allow you to group multiple elements together without adding an extra node to the DOM, which is useful when you need to return multiple elements from a component.",
      },
    ],
  },

  // React - Medium
  {
    category: "react",
    difficulty: "medium",
    questions: [
      {
        question: "What is the purpose of the useEffect hook?",
        answers: [
          "To create side effects in functional components",
          "To handle events in React",
          "To create animations",
          "To optimize rendering performance",
        ],
        correctAnswer: 0,
        explanation:
          "The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
      },
      {
        question: "What is the difference between controlled and uncontrolled components?",
        answers: [
          "Controlled components are faster than uncontrolled components",
          "Controlled components have their state managed by React, while uncontrolled components maintain their own state internally",
          "Uncontrolled components are deprecated",
          "Controlled components can only be used in class components",
        ],
        correctAnswer: 1,
        explanation:
          "In controlled components, form data is handled by React state, while in uncontrolled components, form data is handled by the DOM itself.",
      },
      {
        question: "What is the purpose of React context?",
        answers: [
          "To style components",
          "To pass data through the component tree without having to pass props down manually at every level",
          "To create animations",
          "To optimize performance",
        ],
        correctAnswer: 1,
        explanation:
          "React context provides a way to share values like themes, user data, or any other global data between components without explicitly passing props through every level of the component tree.",
      },
      {
        question: "What is the purpose of the useCallback hook?",
        answers: [
          "To memoize functions so they don't get recreated on every render",
          "To create callback functions",
          "To handle asynchronous operations",
          "To optimize state updates",
        ],
        correctAnswer: 0,
        explanation:
          "useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed, which can help prevent unnecessary renders in child components that rely on reference equality.",
      },
      {
        question: "What is the purpose of the useMemo hook?",
        answers: [
          "To memoize values so they don't get recalculated on every render",
          "To create memoization functions",
          "To handle memory management",
          "To optimize state updates",
        ],
        correctAnswer: 0,
        explanation:
          "useMemo returns a memoized value that only recalculates when one of its dependencies changes, which can help avoid expensive calculations on every render.",
      },
      {
        question: "What is the purpose of React.memo?",
        answers: [
          "To create memoization functions",
          "To memoize component rendering to prevent unnecessary re-renders",
          "To handle memory management",
          "To optimize state updates",
        ],
        correctAnswer: 1,
        explanation:
          "React.memo is a higher-order component that memoizes the rendered output of a component to prevent unnecessary re-renders when its props haven't changed.",
      },
      {
        question: "What is the purpose of the useReducer hook?",
        answers: [
          "To reduce the size of components",
          "To manage state logic in a more complex way than useState",
          "To reduce the number of re-renders",
          "To optimize performance",
        ],
        correctAnswer: 1,
        explanation:
          "useReducer is a hook that is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.",
      },
      {
        question: "What is prop drilling in React?",
        answers: [
          "A technique to optimize props",
          "The process of passing props down through multiple levels of components",
          "A way to create holes in components",
          "A method to validate props",
        ],
        correctAnswer: 1,
        explanation:
          "Prop drilling refers to the process of passing props through multiple levels of nested components, which can become cumbersome and hard to maintain as the application grows.",
      },
      {
        question: "What is the purpose of the useRef hook?",
        answers: [
          "To create references to DOM elements",
          "To store mutable values that don't cause re-renders when changed",
          "Both A and B",
          "To optimize rendering performance",
        ],
        correctAnswer: 2,
        explanation:
          "useRef returns a mutable ref object whose .current property is initialized to the passed argument. It can be used to access DOM elements directly or to store any mutable value that doesn't trigger a re-render when changed.",
      },
      {
        question: "What is the difference between React.Component and React.PureComponent?",
        answers: [
          "PureComponent is faster than Component",
          "PureComponent automatically implements shouldComponentUpdate with a shallow prop and state comparison",
          "PureComponent is deprecated",
          "PureComponent can only be used with hooks",
        ],
        correctAnswer: 1,
        explanation:
          "React.PureComponent is similar to React.Component but automatically implements shouldComponentUpdate with a shallow comparison of props and state, which can improve performance by reducing unnecessary renders.",
      },
    ],
  },

  // React - Hard
  {
    category: "react",
    difficulty: "hard",
    questions: [
      {
        question: "What is the purpose of React Fiber?",
        answers: [
          "A new way to write CSS in React",
          "A complete rewrite of React's core algorithm to enable incremental rendering",
          "A tool for optimizing React applications",
          "A library for handling animations in React",
        ],
        correctAnswer: 1,
        explanation:
          "React Fiber is a complete reimplementation of React's core algorithm that enables incremental rendering, allowing React to split rendering work into chunks and spread it out over multiple frames.",
      },
      {
        question: "What is the difference between Shadow DOM and Virtual DOM?",
        answers: [
          "They are the same thing",
          "Shadow DOM is a browser technology for scoped CSS and DOM, while Virtual DOM is React's lightweight copy of the DOM",
          "Virtual DOM is faster than Shadow DOM",
          "Shadow DOM is used in React Native, while Virtual DOM is used in React",
        ],
        correctAnswer: 1,
        explanation:
          "Shadow DOM is a browser technology that provides encapsulation for DOM and CSS, while Virtual DOM is a concept used by React to optimize updates by creating a lightweight copy of the DOM in memory.",
      },
      {
        question: "What is the purpose of the React.lazy function?",
        answers: [
          "To lazy load components only when they are needed",
          "To delay the rendering of components",
          "To optimize state updates",
          "To reduce the number of re-renders",
        ],
        correctAnswer: 0,
        explanation:
          "React.lazy allows you to render a dynamic import as a regular component, enabling code-splitting and lazy loading of components only when they are needed.",
      },
      {
        question: "What is the purpose of the ErrorBoundary component in React?",
        answers: [
          "To handle network errors",
          "To catch JavaScript errors in child components and display fallback UI",
          "To validate form inputs",
          "To handle routing errors",
        ],
        correctAnswer: 1,
        explanation:
          "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the component tree.",
      },
      {
        question: "What is the purpose of the useImperativeHandle hook?",
        answers: [
          "To handle imperative code in React",
          "To customize the instance value that is exposed when using ref",
          "To optimize imperative operations",
          "To handle DOM manipulations",
        ],
        correctAnswer: 1,
        explanation:
          "useImperativeHandle customizes the instance value that is exposed when a parent component uses ref to access a child component, allowing the child to expose only specific functions or properties.",
      },
      {
        question: "What is the purpose of the useLayoutEffect hook?",
        answers: [
          "To handle layout changes",
          "To perform DOM measurements before the browser paints",
          "To optimize layout rendering",
          "To handle responsive layouts",
        ],
        correctAnswer: 1,
        explanation:
          "useLayoutEffect is similar to useEffect, but it fires synchronously after all DOM mutations and before the browser paints, which is useful when you need to make DOM measurements or manipulations that should be visible immediately.",
      },
      {
        question: "What is the purpose of React Suspense?",
        answers: [
          "To handle loading states",
          "To suspend rendering until certain conditions are met",
          "To optimize performance",
          "To handle errors",
        ],
        correctAnswer: 1,
        explanation:
          "React Suspense is a feature that allows components to 'suspend' rendering while they wait for something (like data or code), showing a fallback UI during the waiting period.",
      },
      {
        question: "What is the purpose of the React.memo higher-order component?",
        answers: [
          "To create memoization functions",
          "To prevent unnecessary re-renders of functional components",
          "To handle memory management",
          "To optimize state updates",
        ],
        correctAnswer: 1,
        explanation:
          "React.memo is a higher-order component that memoizes the rendered output of a functional component to prevent unnecessary re-renders when its props haven't changed.",
      },
      {
        question: "What is the purpose of the useTransition hook?",
        answers: [
          "To create animations",
          "To mark state updates as non-urgent and allow urgent updates to interrupt them",
          "To handle transitions between components",
          "To optimize rendering performance",
        ],
        correctAnswer: 1,
        explanation:
          "useTransition is a React hook that allows you to mark some state updates as non-urgent, letting other, more urgent updates interrupt them, which helps keep the UI responsive during heavy updates.",
      },
      {
        question: "What is the purpose of the useDeferredValue hook?",
        answers: [
          "To defer the value of a variable",
          "To create a deferred version of a value that may 'lag behind' the main value",
          "To optimize performance",
          "To handle asynchronous values",
        ],
        correctAnswer: 1,
        explanation:
          "useDeferredValue accepts a value and returns a new copy of that value that will defer to more urgent updates. It's similar to debouncing or throttling but built into React and integrated with Suspense and concurrent rendering.",
      },
    ],
  },

  // HTML - Easy
  {
    category: "html",
    difficulty: "easy",
    questions: [
      {
        question: "What does HTML stand for?",
        answers: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Hyper Text Modern Language",
        ],
        correctAnswer: 0,
        explanation:
          "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.",
      },
      {
        question: "Which HTML tag is used to define an unordered list?",
        answers: ["<ol>", "<li>", "<ul>", "<list>"],
        correctAnswer: 2,
        explanation:
          "The <ul> tag defines an unordered (bulleted) list. Use the <ul> tag together with the <li> tag to create unordered lists.",
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        answers: ["class", "style", "font", "styles"],
        correctAnswer: 1,
        explanation: "The style attribute is used to add inline CSS styles to an HTML element.",
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correctAnswer: 1,
        explanation:
          "The <a> (anchor) tag is used to create a hyperlink to another page or to a specific location within a page.",
      },
      {
        question: "Which HTML tag is used to define an image?",
        answers: ["<img>", "<image>", "<picture>", "<src>"],
        correctAnswer: 0,
        explanation: "The <img> tag is used to embed an image in an HTML page.",
      },
      {
        question: "Which HTML tag is used to define a table?",
        answers: ["<table>", "<tab>", "<tr>", "<tb>"],
        correctAnswer: 0,
        explanation:
          "The <table> tag defines an HTML table. An HTML table consists of the <table> element and one or more <tr>, <th>, and <td> elements.",
      },
      {
        question: "Which HTML tag is used to define a paragraph?",
        answers: ["<p>", "<paragraph>", "<text>", "<para>"],
        correctAnswer: 0,
        explanation: "The <p> tag defines a paragraph in HTML.",
      },
      {
        question: "Which HTML tag is used to define the most important heading?",
        answers: ["<h6>", "<heading>", "<h1>", "<head>"],
        correctAnswer: 2,
        explanation:
          "The <h1> tag defines the most important (largest) heading in HTML. Headings range from <h1> (most important) to <h6> (least important).",
      },
      {
        question: "Which HTML tag is used to define a line break?",
        answers: ["<lb>", "<break>", "<br>", "<newline>"],
        correctAnswer: 2,
        explanation: "The <br> tag inserts a single line break in HTML.",
      },
      {
        question: "Which HTML tag is used to define emphasized text?",
        answers: ["<italic>", "<i>", "<em>", "<strong>"],
        correctAnswer: 2,
        explanation:
          "The <em> tag is used to define emphasized text. The content inside is typically displayed in italic, but this can be changed with CSS.",
      },
    ],
  },

  // CSS - Easy
  {
    category: "css",
    difficulty: "easy",
    questions: [
      {
        question: "What does CSS stand for?",
        answers: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
        explanation:
          "CSS stands for Cascading Style Sheets, which is a style sheet language used for describing the presentation of a document written in HTML.",
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        answers: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1,
        explanation: "The color property is used to set the color of the text in CSS.",
      },
      {
        question: "Which CSS property is used to change the background color of an element?",
        answers: ["bgcolor", "background-color", "color-background", "bg-color"],
        correctAnswer: 1,
        explanation: "The background-color property is used to set the background color of an element in CSS.",
      },
      {
        question: "Which CSS property is used to change the font of an element?",
        answers: ["font-style", "text-style", "font-family", "text-font"],
        correctAnswer: 2,
        explanation: "The font-family property is used to specify the font for text in CSS.",
      },
      {
        question: "Which CSS property is used to add space between the borders and content of an element?",
        answers: ["spacing", "margin", "padding", "border-spacing"],
        correctAnswer: 2,
        explanation: "The padding property is used to create space between the element's content and its border.",
      },
      {
        question: "Which CSS property is used to change the size of text?",
        answers: ["text-size", "font-size", "text-style", "font-style"],
        correctAnswer: 1,
        explanation: "The font-size property is used to specify the size of the text in CSS.",
      },
      {
        question: "Which CSS property is used to make text bold?",
        answers: ["font-weight", "text-style", "font-style", "text-weight"],
        correctAnswer: 0,
        explanation:
          "The font-weight property is used to specify the weight (boldness) of the font. Values like 'bold' or numeric values like 700 can be used to make text bold.",
      },
      {
        question: "Which CSS property is used to align text?",
        answers: ["text-align", "align", "text-position", "font-align"],
        correctAnswer: 0,
        explanation: "The text-align property is used to specify the horizontal alignment of text in an element.",
      },
      {
        question: "Which CSS property is used to create space around elements, outside of any defined borders?",
        answers: ["spacing", "padding", "margin", "border-spacing"],
        correctAnswer: 2,
        explanation: "The margin property is used to create space around elements, outside of any defined borders.",
      },
      {
        question: "Which CSS property is used to change the style of the border?",
        answers: ["border-style", "border-mode", "border-type", "border-design"],
        correctAnswer: 0,
        explanation:
          "The border-style property is used to specify the style of the border, such as solid, dashed, dotted, etc.",
      },
    ],
  },

  // C Programming - Easy
  {
    category: "c programming",
    difficulty: "easy",
    questions: [
      {
        question: "Which function is used to print output in C?",
        answers: ["scanf()", "print()", "printf()", "cout<<"],
        correctAnswer: 2,
        explanation:
          "printf() is the standard function used to print formatted output to the standard output stream (usually the console) in C.",
      },
      {
        question: "Which function is used to read input in C?",
        answers: ["scanf()", "read()", "input()", "cin>>"],
        correctAnswer: 0,
        explanation:
          "scanf() is the standard function used to read formatted input from the standard input stream (usually the keyboard) in C.",
      },
      {
        question: "Which of the following is the correct way to declare a variable in C?",
        answers: ["variable x;", "x = int;", "int x;", "declare x as int;"],
        correctAnswer: 2,
        explanation:
          "In C, variables are declared by specifying the data type followed by the variable name, such as 'int x;'.",
      },
      {
        question: "Which symbol is used for single-line comments in C?",
        answers: ["//", "/*", "#", "--"],
        correctAnswer: 0,
        explanation:
          "In C, // is used for single-line comments. Everything after // on the same line is treated as a comment and ignored by the compiler.",
      },
      {
        question: "Which operator is used for equality comparison in C?",
        answers: ["=", "==", "===", "!="],
        correctAnswer: 1,
        explanation:
          "In C, the == operator is used to check if two values are equal. The = operator is used for assignment, not comparison.",
      },
      {
        question: "Which header file is required to use the printf() function in C?",
        answers: ["<math.h>", "<string.h>", "<stdio.h>", "<stdlib.h>"],
        correctAnswer: 2,
        explanation:
          "<stdio.h> (standard input/output header) is required to use functions like printf() and scanf() in C.",
      },
      {
        question: "What is the correct way to define a constant in C?",
        answers: ["const int MAX = 100;", "constant int MAX = 100;", "int const MAX = 100;", "Both A and C"],
        correctAnswer: 3,
        explanation:
          "In C, constants can be defined using the 'const' keyword either before or after the data type, so both 'const int MAX = 100;' and 'int const MAX = 100;' are correct.",
      },
      {
        question: "Which loop is guaranteed to execute at least once in C?",
        answers: ["for loop", "while loop", "do-while loop", "None of the above"],
        correctAnswer: 2,
        explanation:
          "The do-while loop in C is guaranteed to execute at least once because the condition is checked after the loop body is executed.",
      },
      {
        question: "What is the size of an int data type in C?",
        answers: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler and system"],
        correctAnswer: 3,
        explanation:
          "The size of an int in C depends on the compiler and the system. It's typically 4 bytes on 32-bit systems and can be 4 or 8 bytes on 64-bit systems.",
      },
      {
        question: "Which operator is used to access the address of a variable in C?",
        answers: ["*", "&", "#", "@"],
        correctAnswer: 1,
        explanation:
          "The & (ampersand) operator is used to get the memory address of a variable in C, which is essential for pointer operations.",
      },
    ],
  },

  // C++ Programming - Easy
  {
    category: "c++ programming",
    difficulty: "easy",
    questions: [
      {
        question: "Which statement is used to print output in C++?",
        answers: ["System.out.println()", "printf()", "cout<<", "print()"],
        correctAnswer: 2,
        explanation:
          "In C++, cout<< is the standard way to output data to the standard output stream (usually the console).",
      },
      {
        question: "Which statement is used to read input in C++?",
        answers: ["scanf()", "readln()", "cin>>", "input()"],
        correctAnswer: 2,
        explanation:
          "In C++, cin>> is the standard way to read data from the standard input stream (usually the keyboard).",
      },
      {
        question: "Which header file is required to use cout and cin in C++?",
        answers: ["<stdio.h>", "<iostream>", "<stream>", "<iomanip>"],
        correctAnswer: 1,
        explanation: "The <iostream> header file is required to use cout and cin in C++.",
      },
      {
        question: "What is the correct way to create a class in C++?",
        answers: ["class MyClass { };", "struct MyClass { };", "int MyClass { };", "def MyClass { };"],
        correctAnswer: 0,
        explanation:
          "In C++, a class is defined using the 'class' keyword followed by the class name and the class body enclosed in curly braces.",
      },
      {
        question: "Which keyword is used to define a function that doesn't return a value in C++?",
        answers: ["void", "null", "none", "empty"],
        correctAnswer: 0,
        explanation: "In C++, the 'void' keyword is used to specify that a function doesn't return a value.",
      },
      {
        question: "What is the correct way to create an object of a class in C++?",
        answers: ["MyClass obj = new MyClass();", "MyClass obj;", "new MyClass obj;", "create MyClass obj;"],
        correctAnswer: 1,
        explanation:
          "In C++, an object of a class can be created by simply declaring a variable of the class type, such as 'MyClass obj;'.",
      },
      {
        question: "Which operator is used for dynamic memory allocation in C++?",
        answers: ["malloc", "alloc", "new", "create"],
        correctAnswer: 2,
        explanation:
          "In C++, the 'new' operator is used for dynamic memory allocation, which allocates memory at runtime.",
      },
      {
        question: "Which operator is used for dynamic memory deallocation in C++?",
        answers: ["free", "dealloc", "delete", "remove"],
        correctAnswer: 2,
        explanation:
          "In C++, the 'delete' operator is used to deallocate memory that was previously allocated with 'new'.",
      },
      {
        question: "What is the correct way to define a constant in C++?",
        answers: ["const int MAX = 100;", "constant int MAX = 100;", "int const MAX = 100;", "Both A and C"],
        correctAnswer: 3,
        explanation:
          "In C++, constants can be defined using the 'const' keyword either before or after the data type, so both 'const int MAX = 100;' and 'int const MAX = 100;' are correct.",
      },
      {
        question: "Which of the following is a feature of C++ but not C?",
        answers: ["Pointers", "Structures", "Classes", "Arrays"],
        correctAnswer: 2,
        explanation:
          "Classes are a feature of C++ that are not present in C. C++ is an extension of C that adds object-oriented features like classes and inheritance.",
      },
    ],
  },
]

export default quizData
