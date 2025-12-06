const facts = [
    "The ocean covers 71% of Earth's surface.",
    "The deepest part of the ocean is nearly 11 km down.",
    "Over 80% of the ocean is still unexplored!",
    "There are underwater lakes and rivers.",
    "Some jellyfish can live forever (kinda)."
];

let index = 0;

function updateFact() {
    const factBox = document.getElementById("fact-slider-text");
    factBox.textContent = facts[index];
    index = (index + 1) % facts.length;
}

setInterval(updateFact, 3000);
//  the fact game

// will adapt this later to use with API
const realFacts = [
    "The blue whale’s heart is the size of a small car.",
    "Octopuses have three hearts.",
    "The ocean produces over half of Earth's oxygen.",
    "Some fish can walk on land."
];

const fakeFacts = [
    "Sea turtles can breathe underwater forever.",
    "The Pacific Ocean glows yellow at night.",
    "Mermaids were officially documented in 1923.",
    "Sharks sleep for 12 hours every day."
];

function startGameRound() {
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const resultBox = document.getElementById("game-result");

    // Clear old styles
    optionA.className = "fact-btn";
    optionB.className = "fact-btn";
    resultBox.textContent = "";

    // pick random facts
    const real = realFacts[Math.floor(Math.random() * realFacts.length)];
    const fake = fakeFacts[Math.floor(Math.random() * fakeFacts.length)];

    // random placement
    const realOnA = Math.random() < 0.5;

    optionA.textContent = realOnA ? real : fake;
    optionB.textContent = realOnA ? fake : real;

    // enable buttons
    optionA.disabled = false;
    optionB.disabled = false;

    optionA.onclick = () => check(realOnA, optionA, optionB);
    optionB.onclick = () => check(!realOnA, optionB, optionA);
}

function check(isCorrect, chosenBtn, otherBtn) {
    const resultBox = document.getElementById("game-result");

    if (isCorrect) {
        chosenBtn.classList.add("correct");
        resultBox.textContent = "Correct! ";
    } else {
        chosenBtn.classList.add("wrong");
        otherBtn.classList.add("correct");
        resultBox.textContent = "Nope! ";
    }

    // disable clicks so user can't spam buttons
    chosenBtn.disabled = true;
    otherBtn.disabled = true;

    // next round starts in aroudn 2 seconds
    setTimeout(startGameRound, 2000);
}

startGameRound();
