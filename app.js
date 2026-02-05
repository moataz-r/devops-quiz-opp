let questions = [];
let currentQuestionIndex = 0;
let filteredQuestions = [];

const topicSelect = document.getElementById("topicSelect");
const quizContainer = document.getElementById("quizContainer");

// Load questions using fetch
fetch("questions.json")
  .then(response => response.json())
  .then(data => {
    questions = data;
    loadTopics();
  });

// Populate topic dropdown
function loadTopics() {
  const topics = [...new Set(questions.map(q => q.topic))];

  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicSelect.appendChild(option);
  });
}

// Handle topic selection
topicSelect.addEventListener("change", () => {
  filteredQuestions = questions.filter(
    q => q.topic === topicSelect.value
  );
  currentQuestionIndex = 0;
  showQuestion();
});

// Display question and options
function showQuestion() {
  quizContainer.innerHTML = "";

  if (currentQuestionIndex >= filteredQuestions.length) {
    quizContainer.innerHTML = "<h3>Quiz completed!</h3>";
    return;
  }

  const questionObj = filteredQuestions[currentQuestionIndex];

  const questionEl = document.createElement("h3");
  questionEl.textContent = questionObj.question;
  quizContainer.appendChild(questionEl);

  questionObj.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    quizContainer.appendChild(button);
  });
}

// Check answer and show feedback
function checkAnswer(selectedIndex) {
  const questionObj = filteredQuestions[currentQuestionIndex];
  quizContainer.innerHTML = "";

  const feedback = document.createElement("p");

  if (selectedIndex === questionObj.answerIndex) {
    feedback.textContent = "Correct!";
    feedback.className = "correct";
  } else {
    feedback.textContent = "Incorrect.";
    feedback.className = "incorrect";
  }

  const explanation = document.createElement("p");
  explanation.textContent = questionObj.explanation;

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next Question";
  nextButton.onclick = () => {
    currentQuestionIndex++;
    showQuestion();
  };

  quizContainer.appendChild(feedback);
  quizContainer.appendChild(explanation);
  quizContainer.appendChild(nextButton);
}
