const quizQuestions = {
    English: [
      {
        question: "What is the synonym of 'quick'?",
        options: ["Fast", "Slow", "Lazy", "Heavy"],
        answer: "Fast",
      },
      {
        question: "What is the antonym of 'happy'?",
        options: ["Sad", "Joyful", "Calm", "Excited"],
        answer: "Sad",
      },
      {
        question: "Identify the type of sentence: 'Although it was raining, we still went for a walk.'",
        options: ["Simple", "Compound", "Complex"],
        answer: "Complex",
      },
      {
        question: "Which of the following is a synonym of 'elated'?",
        options: ["Sad", "Ecstatic", "Angry"],
        answer: "Ecstatic",
      },
      {
        question: "What is the correct past tense form of the verb 'run'?",
        options: ["Runned", "Ran", "Running"],
        answer: "Ran",
      },
      {
        question: "In the sentence 'The boy kicked the ball', what is the object?",
        options: ["The boy", "Kicked", "The ball"],
        answer: "The ball",
      },
      {
        question: "Which literary device is used in this sentence: 'The wind whispered through the trees'?",
        options: ["Personification", "Simile", "Metaphor"],
        answer: "Personification",
      }
    ],
    Mathematics: [
      {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      {
        question: "What is the square root of 81?",
        options: ["7", "8", "9", "10"],
        answer: "9",
      },
      {
        question: "What is 6 + 7?",
        options: ["11", "12", "13", "14"],
        answer: "13"
      },
      {
        question: "What is 15 - 8?",
        options: ["5", "6", "7", "8"],
        answer: "7"
      },
      {
        question: "What is 5 x 3?",
        options: ["15", "10", "20", "25"],
        answer: "15"
      },
      {
        question: "What is 20 ÷ 4?",
        options: ["3", "4", "5", "6"],
        answer: "5"
      },
      {
        question: "What is 1/2 of 10?",
        options: ["3", "4", "5", "6"],
        answer: "5"
      },
      {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        answer: "3"
      },
      {
        question: "What is the next number in the pattern: 2, 4, 6, __?",
        options: ["7", "8", "9", "10"],
        answer: "8"
      },
      {
        question: "What is 9 + 5?",
        options: ["13", "14", "15", "16"],
        answer: "14"
      },
      {
        question: "Which number is greater: 45 or 54?",
        options: ["45", "54", "They are equal", "None of the above"],
        answer: "54"
      },
      {
        question: "How many hours are in a day?",
        options: ["10", "12", "24", "60"],
        answer: "24"
      }
    ],
    Science: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "HO"],
        answer: "H2O",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Brain"],
        answer: "Skin"
      },
      {
        question: "What do plants need to make food?",
        options: ["Water", "Sunlight", "Soil", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "Which part of the plant absorbs water?",
        options: ["Leaves", "Stem", "Roots", "Flowers"],
        answer: "Roots"
      },
      {
        question: "What gas do humans need to breathe?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Oxygen"
      },
      {
        question: "How many planets are in our solar system?",
        options: ["7", "8", "9", "10"],
        answer: "8"
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Elephant", "Tiger", "Lion", "Giraffe"],
        answer: "Lion"
      },
      {
        question: "What do we call the change from a caterpillar to a butterfly?",
        options: ["Growth", "Transformation", "Metamorphosis", "Evolution"],
        answer: "Metamorphosis"
      },
      {
        question: "What is the boiling point of water?",
        options: ["50°C", "100°C", "200°C", "150°C"],
        answer: "100°C"
      },
      {
        question: "Which of these is a renewable source of energy?",
        options: ["Coal", "Oil", "Solar", "Natural Gas"],
        answer: "Solar"
      }
    ],

    History: [
      {
        question: "Who is known as the National Hero of the Philippines?",
        options: ["Andres Bonifacio", "Emilio Aguinaldo", "José Rizal", "Carlos P. Romulo"],
        answer: "José Rizal",
      },
      {
        question: "What year did the Philippines gain independence from Spain?",
        options: ["1896", "1898", "1901", "1946"],
        answer: "1898",
      },
      {
        question: "Which event is celebrated as Philippine Independence Day?",
        options: ["April 9", "June 12", "August 21", "December 30"],
        answer: "June 12",
      },
      {
        question: "What is the capital city of the Philippines?",
        options: ["Quezon City", "Makati", "Manila", "Cebu"],
        answer: "Manila",
      },
      {
        question: "Who was the first president of the Philippines?",
        options: ["Emilio Aguinaldo", "Manuel L. Quezon", "Sergio Osmeña", "José Laurel"],
        answer: "Emilio Aguinaldo",
      },
      {
        question: "What is the primary language spoken in the Philippines?",
        options: ["English", "Spanish", "Tagalog", "Cebuano"],
        answer: "Tagalog",
      },
      {
        question: "Which Philippine revolution took place in 1896 against Spanish rule?",
        options: ["The EDSA Revolution", "The Philippine Revolution", "The People Power Revolution", "The Reform Movement"],
        answer: "The Philippine Revolution",
      },
      {
        question: "Who led the Philippine Revolution against Spain?",
        options: ["Andres Bonifacio", "José Rizal", "Emilio Aguinaldo", "Juan Luna"],
        answer: "Andres Bonifacio",
      },
      {
        question: "What treaty ended the Spanish-American War?",
        options: ["Treaty of Paris", "Treaty of Manila", "Treaty of Versailles", "Treaty of Tordesillas"],
        answer: "Treaty of Paris",
      },
      {
        question: "Which event is commemorated by Araw ng Kagitingan?",
        options: ["The fall of Bataan", "Independence Day", "National Heroes Day", "The EDSA Revolution"],
        answer: "The fall of Bataan",
      },
      {
        question: "What year was the Philippine Commonwealth established?",
        options: ["1935", "1941", "1946", "1950"],
        answer: "1935",
      },
      {
        question: "Who was the first female president of the Philippines?",
        options: ["Corazon Aquino", "Gloria Macapagal Arroyo", "Imelda Marcos", "Leni Robredo"],
        answer: "Corazon Aquino",
      },
    ],
   

  };
  
  export default quizQuestions;
  
  