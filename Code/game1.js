let questions = [
    "How much of the earth is covered by oceans?",
    "How deep is the deepest part of the ocean?",
    "How many hearts do octopuses have?",
    "How big is a blue whale's heart?"
];

let options = [
    ["71%", "86%", "68%", "81%"],
    ["nearly 10km", "nearly 10.5km", "nearly 11km", "nearly 11.5km"],
    ["1", "3", "4", "2"],
    ["four car tires", "a fridge", "a human heart", "a small car"]
];

let answers = [0, 2, 1, 3];
let index = 0;
let score = 0;

function showQuestion() {
    let quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = `<h2>${questions[index]}</h2>`;
    
    options[index].forEach((opt, i) => {
        quizDiv.innerHTML += `<button class="quiz-button" onclick="checkAnswer(${i})">${opt}</button>`;
    });
}

function checkAnswer(choice) {
    let buttons = document.querySelectorAll(".quiz.button");

    buttons.forEach(btn => btn.disabled = true);

    if (choice === answers[index]) {
        alert("Correct!");
        score++;
    } 
    
    else {
        alert("Wrong!");
    } 
}

setTimeout (() => {
    index++;
    if (index < questions.length) {
        showQuestion();
    } else {
        alert("Quiz finished!");
        showFinalScore();
    }
}, 1000);

function showFinalScore() {
    let quizDiv = document.getElementById("quiz");

    quizDiv.innerHTML = `
        <h2>Quiz finished!</h2>
        <p>Your final score is <strong>${score}</strong> out of <strong>${questions.length}</strong>.</p>
        <button class="quiz-button" onclick="restartQuiz()">Play Again</button>
    `;
}

function restartQuiz() {
    index = 0;
    score = 0;
    showQuestion();
}

showQuestion();
