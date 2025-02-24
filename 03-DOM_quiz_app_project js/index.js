const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correct: 3,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: [
      "William Shakespeare",
      "Charles Dickens",
      "Leo Tolstoy",
      "Mark Twain",
    ],
    correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  let currentQuestionData = quizData[currentQuestion]; // quizData[0]

  // add question title
  document.getElementById("question").textContent =
    currentQuestion + 1 + ") " + currentQuestionData.question;

  let choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = currentQuestionData.choices[index];
    choice.style.background = "#007bff";
    choice.disabled = false;
  });

  document.getElementById("nextButton").style.display = "none";
}

function selectAnswer(index) {
  let currentQuestionData = quizData[currentQuestion];
  let choices = document.querySelectorAll(".choice");

  if (index === currentQuestionData.correct) {
    score++;
    choices[index].style.backgroundColor = "#28a745";
  } else {
    choices[index].style.backgroundColor = "#dc3545";
    choices[currentQuestionData.correct].style.backgroundColor = "#28a745";
  }

  choices.forEach((choice) => {
    choice.disabled = true;
  });

  document.getElementById("nextButton").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("quiz").innerHTML = `
    
    <h2>Your score: ${score} out of ${quizData.length} </h2> 
    <button id="restartButton">Restart Quiz</button>
    
    `;

  document
    .getElementById("restartButton")
    .addEventListener("click", restartQuiz);
}

function restartQuiz() {
  window.location.reload();
}

window.onload = loadQuestion();
