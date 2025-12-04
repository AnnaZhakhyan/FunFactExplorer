document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------
       🌊 OCEAN PAGE CODE
    ------------------------------ */

    // Ocean fact slider
    if (document.getElementById("fact-slider-text")) {

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
            if (!factBox) return;
            factBox.textContent = facts[index];
            index = (index + 1) % facts.length;
        }

        setInterval(updateFact, 3000);
        updateFact();
    }

    // Ocean "Real or Fake" game
    if (document.getElementById("optionA") && document.getElementById("optionB")) {

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

            if (!optionA || !optionB) return;

            optionA.className = "fact-btn";
            optionB.className = "fact-btn";
            resultBox.textContent = "";

            const real = realFacts[Math.floor(Math.random() * realFacts.length)];
            const fake = fakeFacts[Math.floor(Math.random() * fakeFacts.length)];
            const realOnA = Math.random() < 0.5;

            optionA.textContent = realOnA ? real : fake;
            optionB.textContent = realOnA ? fake : real;

            optionA.disabled = false;
            optionB.disabled = false;

            optionA.onclick = () => check(realOnA, optionA, optionB);
            optionB.onclick = () => check(!realOnA, optionB, optionA);
        }

        function check(isCorrect, chosenBtn, otherBtn) {
            const resultBox = document.getElementById("game-result");

            if (isCorrect) {
                chosenBtn.classList.add("correct");
                resultBox.textContent = "Correct!";
            } else {
                chosenBtn.classList.add("wrong");
                otherBtn.classList.add("correct");
                resultBox.textContent = "Nope!";
            }

            chosenBtn.disabled = true;
            otherBtn.disabled = true;

            setTimeout(startGameRound, 2000);
        }

        startGameRound();
    }



    /* -----------------------------
       🔬 SCIENCE PAGE CODE
    ------------------------------ */

    // Science fact slider
    if (document.getElementById("fact-slider-text-science")) {

        const scienceFacts = [
            "Lightning is five times hotter than the surface of the Sun.",
            "Bananas are naturally radioactive.",
            "A teaspoon of a neutron star weighs about 4 billion tons.",
            "There are more stars in the universe than grains of sand on Earth.",
            "Water can boil and freeze at the same time (triple point)."
        ];

        let sciIndex = 0;

        function updateScienceFact() {
            const factBox = document.getElementById("fact-slider-text-science");
            if (!factBox) return;
            factBox.textContent = scienceFacts[sciIndex];
            sciIndex = (sciIndex + 1) % scienceFacts.length;
        }

        setInterval(updateScienceFact, 3000);
        updateScienceFact();
    }

    // Science "Real or Fake" game
    if (document.getElementById("science-optionA") && document.getElementById("science-optionB")) {

        const scienceRealFacts = [
            "Humans share 60% of their DNA with bananas.",
            "Honey never spoils — archaeologists found 3000-year-old honey still edible.",
            "You can start a fire with ice if shaped into a lens.",
            "Some metals explode when they touch water."
        ];

        const scienceFakeFacts = [
            "The Sun is actually cold inside.",
            "Humans only use 2% of their brain.",
            "Rocks can breathe underwater.",
            "Gravity turns off for 10 minutes every month."
        ];

        function startScienceGame() {
            const A = document.getElementById("science-optionA");
            const B = document.getElementById("science-optionB");
            const result = document.getElementById("science-game-result");

            if (!A || !B) return;

            A.className = "fact-btn";
            B.className = "fact-btn";
            result.textContent = "";

            const real = scienceRealFacts[Math.floor(Math.random() * scienceRealFacts.length)];
            const fake = scienceFakeFacts[Math.floor(Math.random() * scienceFakeFacts.length)];
            const realOnA = Math.random() < 0.5;

            A.textContent = realOnA ? real : fake;
            B.textContent = realOnA ? fake : real;

            A.disabled = false;
            B.disabled = false;

            A.onclick = () => checkScience(realOnA, A, B);
            B.onclick = () => checkScience(!realOnA, B, A);
        }

        function checkScience(correct, chosen, other) {
            const result = document.getElementById("science-game-result");

            if (correct) {
                chosen.classList.add("correct");
                result.textContent = "Correct!";
            } else {
                chosen.classList.add("wrong");
                other.classList.add("correct");
                result.textContent = "Wrong!";
            }

            chosen.disabled = true;
            other.disabled = true;

            setTimeout(startScienceGame, 2000);
        }

        startScienceGame();
    }

});
