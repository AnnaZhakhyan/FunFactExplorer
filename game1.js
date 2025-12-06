

let questions = [
    "How much of the earth is covered by oceans?",
    "How long is a giraffe's tongue?",
    "Where did the Industrial Revolution in the 18th century begin?",
    "Which language has the least letters?",
    "Lightening is five times hotter than..?",
    "How deep is the deepest part of the ocean?",
    "What is the name of the ancient Egyptian sun god?",
    "When did the first humans land on the moon?",
    "How many hearts do octopuses have?",
    "What is the name of the biggest river (volume wise) in the world?",
    "How big is a blue whale's heart?",
    "How many languages are roughly spoken today?",
    "What is roughly the size of the Sahara Desert?",
    "Bananas are naturally..?",
    "What does falling into a black hole do to you?"
];

let options = [
    ["71%", "86%", "68%", "81%"],
    ["55-60cm", "45-50cm", "50-55cm", "40-45cm"],
    ["South Korea", "Germany", "France", "Britain"],
    ["Tagalog", "Hawaiian", "Chinese", "English"],
    ["lava", "an atomic bomb", "the inside of a flame", "the surface of the sun"],
    ["nearly 10km", "nearly 10.5km", "nearly 11km", "nearly 11.5km"],
    ["Sa", "Ra", "Ma", "Ta"],
    ["1969", "1970", "1979", "1960"],
    ["1", "3", "4", "2"],
    ["Amazon river", "Nile river", "Mississippi-Missouri river", "Ganges-Brahmaputra river"],
    ["four car tires", "a fridge", "a human heart", "a small car"],
    ["7.000", "5.000", "10.000", "9.000"],
    ["Brazil", "Australia", "the United States", "China"],
    ["red", "radioactive", "healthy", "heart-shaped"],
    ["splits you into your molecule components", "transforms you to a dragon", "presses you together to a little ball", "streches you like spaghetti"]
];

let answers = [0, 1, 3, 1, 3, 2, 1, 0, 1, 0, 3, 0, 2, 1, 3];
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
