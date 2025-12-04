
/* -----------------------------
   INDEX PAGE GAME
------------------------------ */

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
    let resultBox = document.getElementById("quiz-result");

    resultBox.textContent = "";
    quizDiv.innerHTML = `<h2>${questions[index]}</h2>`;

    options[index].forEach((opt, i) => {
        quizDiv.innerHTML += `<button class="quiz-button" data-choice="${i}">${opt}</button>`;
    });

    document.querySelectorAll(".quiz-button").forEach(btn => {
        btn.addEventListener("click", () => checkAnswer(btn));
    });
}

function checkAnswer(button) {
    const choice = Number(button.dataset.choice);
    const isCorrect = choice === answers[index];
    const resultBox = document.getElementById("quiz-result");

    let buttons = document.querySelectorAll(".quiz-button");

    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add("correct");
        resultBox.textContent = "Correct!";
        score++;
    }

    else {
        button.classList.add("wrong");
        buttons[answers[index]].classList.add("correct");
        resultBox.textContent = "Nope!";
    }

    setTimeout(() => {
        index++;
        if (index < questions.length) {
            showQuestion();
        } else {
            showFinalScore();
        }
    }, 1500);
}



function showFinalScore() {
    let quizDiv = document.getElementById("quiz");
    let resultBox = document.getElementById("quiz-result");

    resultBox.textContent = "";
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
