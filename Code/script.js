document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------
      ocean page
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
       SCIENCE PAGE CODE
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
    /* -----------------------------
    space page
   ------------------------------ */

if (document.getElementById("fact-slider-text-science")) {

    const spaceFacts = [
        "Jupiter’s Great Red Spot is a storm that’s been raging for at least 350 years.",
        "A day on Venus is longer than a full Venus year.",
        "There's a massive cloud in space that smells like rum and contains sugar molecules.",
        "Neutron stars can spin up to 700 times per second.",
        "Falling into a black hole would stretch you like spaghetti — it's called spaghettification."
    ];

    let spIndex = 0;

    function updateScienceFact() {
        const factBox = document.getElementById("fact-slider-text-science");
        if (!factBox) return;

        factBox.textContent = spaceFacts[spIndex];
        spIndex = (spIndex + 1) % spaceFacts.length;  
    }

    setInterval(updateScienceFact, 3000);
    updateScienceFact();
}


if (document.getElementById("science-optionA") && document.getElementById("science-optionB")) {

    const spaceRealFacts = [
        "Space is completely silent — sound cannot travel in a vacuum.",
        "Mars has the largest volcano in the solar system, Olympus Mons.",
        "The Sun makes up 99.8% of all mass in our solar system.",
        "There are more trees on Earth than stars in the Milky Way."
    ];

    const spaceFakeFacts = [
        "Astronauts grow a new tooth for every year spent in space.",
        "The Moon glows because it has a giant lightbulb inside.",
        "Saturn's rings are made of frozen pancakes.",
        "Black holes sneeze every 12 minutes."
    ];

    function startScienceGame() {
        const A = document.getElementById("science-optionA");
        const B = document.getElementById("science-optionB");
        const result = document.getElementById("science-game-result");

        if (!A || !B) return;

        A.className = "fact-btn";
        B.className = "fact-btn";
        result.textContent = "";

        const real = spaceRealFacts[Math.floor(Math.random() * spaceRealFacts.length)];
        const fake = spaceFakeFacts[Math.floor(Math.random() * spaceFakeFacts.length)];
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
            result.textContent = "Correct! 🚀";
        } else {
            chosen.classList.add("wrong");
            other.classList.add("correct");
            result.textContent = "Wrong! 👀";
        }

        chosen.disabled = true;
        other.disabled = true;

        setTimeout(startScienceGame, 2000);
    }

    startScienceGame();
}


    /* -----------------------------
       ANIMALS PAGE CODE
    ------------------------------ */

    // Animal fact slider
    if (document.getElementById("fact-slider-text-animals")) {

        const animalFacts = [
            "A snail can sleep for three years.",
            "Elephants are the only mammals that can't jump.",
            "A group of flamingos is called a 'flamboyance'.",
            "Octopuses have three hearts and blue blood.",
            "Dolphins have names for each other."
        ];

        let aniIndex = 0;

        function updateAnimalFact() {
            const factBox = document.getElementById("fact-slider-text-animals");
            if (!factBox) return;
            factBox.textContent = animalFacts[aniIndex];
            aniIndex = (aniIndex + 1) % animalFacts.length;
        }

        setInterval(updateAnimalFact, 3000);
        updateAnimalFact();
    }



    // Animal Real or Fake game
    if (document.getElementById("animals-optionA") && document.getElementById("animals-optionB")) {

        const animalRealFacts = [
            "Koalas sleep up to 22 hours a day.",
            "Sharks existed before trees.",
            "Cows have best friends and get stressed when separated.",
            "Butterflies taste with their feet."
        ];

        const animalFakeFacts = [
            "Cats can breathe underwater for 5 minutes.",
            "Tigers can change colors like chameleons.",
            "Penguins can fly if they run fast enough.",
            "Crocodiles sweat through their teeth."
        ];

        function startAnimalGame() {
            const A = document.getElementById("animals-optionA");
            const B = document.getElementById("animals-optionB");
            const result = document.getElementById("animals-game-result");

            if (!A || !B || !result) return;

            A.className = "fact-btn";
            B.className = "fact-btn";
            result.textContent = "";

            const real = animalRealFacts[Math.floor(Math.random() * animalRealFacts.length)];
            const fake = animalFakeFacts[Math.floor(Math.random() * animalFakeFacts.length)];
            const realOnA = Math.random() < 0.5;

            A.textContent = realOnA ? real : fake;
            B.textContent = realOnA ? fake : real;

            A.disabled = false;
            B.disabled = false;

            A.onclick = () => checkAnimal(realOnA, A, B);
            B.onclick = () => checkAnimal(!realOnA, B, A);
        }

        function checkAnimal(correct, chosen, other) {
            const result = document.getElementById("animals-game-result");

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

            setTimeout(startAnimalGame, 2000);
        }

        startAnimalGame();
    }

    /* -----------------------------
       LANGUAGES PAGE CODE
    ------------------------------ */

    // Language fact slider
    if (document.getElementById("fact-slider-text-languages")) {

        const languageFacts = [
            "There are over 7,000 languages spoken worldwide.",
            "The most translated book is the Bible.",
            "Some languages whistle instead of speak, like Silbo Gomero.",
            "Japanese has no plural form for words.",
            "Arabic is written from right to left."
        ];

        let langIndex = 0;

        function updateLanguageFact() {
            const factBox = document.getElementById("fact-slider-text-languages");
            if (!factBox) return;
            factBox.textContent = languageFacts[langIndex];
            langIndex = (langIndex + 1) % languageFacts.length;
        }

        setInterval(updateLanguageFact, 3000);
        updateLanguageFact();
    }



    // Language Real or Fake game
    if (document.getElementById("languages-optionA") && document.getElementById("languages-optionB")) {

        const languageRealFacts = [
            "Korean is one of the youngest writing systems, created in the 1400s.",
            "French was the official language of England for about 300 years.",
            "Hindi and Urdu are mutually intelligible when spoken.",
            "Many African languages use clicks, like Xhosa."
        ];

        const languageFakeFacts = [
            "Spanish has 200 letters in its alphabet.",
            "English originally had no vowels.",
            "Mandarin Chinese can be spoken backward fluently.",
            "Every language uses the exact same grammar rules."
        ];

        function startLanguageGame() {
            const A = document.getElementById("languages-optionA");
            const B = document.getElementById("languages-optionB");
            const result = document.getElementById("languages-game-result");

            if (!A || !B || !result) return;

            A.className = "fact-btn";
            B.className = "fact-btn";
            result.textContent = "";

            const real = languageRealFacts[Math.floor(Math.random() * languageRealFacts.length)];
            const fake = languageFakeFacts[Math.floor(Math.random() * languageFakeFacts.length)];
            const realOnA = Math.random() < 0.5;

            A.textContent = realOnA ? real : fake;
            B.textContent = realOnA ? fake : real;

            A.disabled = false;
            B.disabled = false;

            A.onclick = () => checkLanguage(realOnA, A, B);
            B.onclick = () => checkLanguage(!realOnA, B, A);
        }

        function checkLanguage(correct, chosen, other) {
            const result = document.getElementById("languages-game-result");

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

            setTimeout(startLanguageGame, 2000);
        }

        startLanguageGame();
    }

    /* -----------------------------
       HISTORY PAGE CODE
    ------------------------------ */

    // History fact slider
    if (document.getElementById("fact-slider-text-history")) {

        const historyFacts = [
            "The Great Fire of London happened in 1666.",
            "The shortest war in history was between Britain and Zanzibar, lasting 38 minutes.",
            "Julius Caesar was assassinated in 44 BC.",
            "The Berlin Wall fell in 1989.",
            "Napoleon was once attacked by a horde of bunnies."
        ];

        let histIndex = 0;

        function updateHistoryFact() {
            const factBox = document.getElementById("fact-slider-text-history");
            if (!factBox) return;
            factBox.textContent = historyFacts[histIndex];
            histIndex = (histIndex + 1) % historyFacts.length;
        }

        setInterval(updateHistoryFact, 3000);
        updateHistoryFact();
    }



    // History Real or Fake game
    if (document.getElementById("history-optionA") && document.getElementById("history-optionB")) {

        const historyRealFacts = [
            "The Library of Alexandria was one of the largest libraries of the ancient world.",
            "The first Olympic Games were held in 776 BC in Greece.",
            "The printing press was invented by Johannes Gutenberg in the 15th century.",
            "The Magna Carta was signed in 1215, limiting the power of the king."
        ];

        const historyFakeFacts = [
            "The Roman Empire had cars powered by steam.",
            "King Tut was the first pharaoh to ride a bicycle.",
            "The Titanic sank in 1901 due to ice cream melting.",
            "The Colosseum could host space shuttle launches."
        ];

        function startHistoryGame() {
            const A = document.getElementById("history-optionA");
            const B = document.getElementById("history-optionB");
            const result = document.getElementById("history-game-result");

            if (!A || !B || !result) return;

            A.className = "fact-btn";
            B.className = "fact-btn";
            result.textContent = "";

            const real = historyRealFacts[Math.floor(Math.random() * historyRealFacts.length)];
            const fake = historyFakeFacts[Math.floor(Math.random() * historyFakeFacts.length)];
            const realOnA = Math.random() < 0.5;

            A.textContent = realOnA ? real : fake;
            B.textContent = realOnA ? fake : real;

            A.disabled = false;
            B.disabled = false;

            A.onclick = () => checkHistory(realOnA, A, B);
            B.onclick = () => checkHistory(!realOnA, B, A);
        }

        function checkHistory(correct, chosen, other) {
            const result = document.getElementById("history-game-result");

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

            setTimeout(startHistoryGame, 2000);
        }

        startHistoryGame();
    }

    /* -----------------------------
        GEOGRAPHY PAGE CODE
    ------------------------------ */

    // Geography fact slider
    if (document.getElementById("fact-slider-text-geography")) {

        const geographyFacts = [
            "Lake Baikal in Russia is the deepest freshwater lake in the world.",
            "The Dead Sea is the lowest point on Earth’s land surface.",
            "Greenland is the world's largest island that is not a continent.",
            "Mount Kilimanjaro is a free-standing mountain in Africa.",
            "Russia spans 11 time zones across two continents."
        ];

        let geoIndex = 0;

        function updateGeographyFact() {
            const factBox = document.getElementById("fact-slider-text-geography");
            if (!factBox) return;
            factBox.textContent = geographyFacts[geoIndex];
            geoIndex = (geoIndex + 1) % geographyFacts.length;
        }

        setInterval(updateGeographyFact, 3000);
        updateGeographyFact();
    }



    // Geography Real or Fake game
    if (document.getElementById("geography-optionA") && document.getElementById("geography-optionB")) {

        const geographyRealFacts = [
            "The Nile River is the longest river in Africa.",
            "The Great Barrier Reef is the largest coral reef system on Earth.",
            "Antarctica is the driest continent, even drier than the Sahara in places.",
            "The Mariana Trench is the deepest oceanic trench in the world."
        ];

        const geographyFakeFacts = [
            "The Amazon River flows through Europe.",
            "Mount Everest is underwater.",
            "The Sahara Desert is covered in ice.",
            "The Pacific Ocean is the smallest ocean."
        ];

        function startGeographyGame() {
            const A = document.getElementById("geography-optionA");
            const B = document.getElementById("geography-optionB");
            const result = document.getElementById("geography-game-result");

            if (!A || !B || !result) return;

            A.className = "fact-btn";
            B.className = "fact-btn";
            result.textContent = "";

            const real = geographyRealFacts[Math.floor(Math.random() * geographyRealFacts.length)];
            const fake = geographyFakeFacts[Math.floor(Math.random() * geographyFakeFacts.length)];
            const realOnA = Math.random() < 0.5;

            A.textContent = realOnA ? real : fake;
            B.textContent = realOnA ? fake : real;

            A.disabled = false;
            B.disabled = false;

            A.onclick = () => checkGeography(realOnA, A, B);
            B.onclick = () => checkGeography(!realOnA, B, A);
        }

        function checkGeography(correct, chosen, other) {
            const result = document.getElementById("geography-game-result");

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

            setTimeout(startGeographyGame, 2000);
        }

        startGeographyGame();
    }

    /* -----------------------------
       MYTHOLOGY PAGE CODE
    ------------------------------ */

    // Mythology fact slider
    if (document.getElementById("fact-slider-text-mythology")) {

        const mythologyFacts = [
            "The Minotaur was a half-man, half-bull creature in Greek mythology.",
            "In Norse myths, Yggdrasil is the world tree that connects all realms.",
            "Medusa could turn anyone who looked at her into stone.",
            "The phoenix is a mythical bird that rises from its ashes.",
            "Anubis is the ancient Egyptian god of mummification and the afterlife."
        ];

        let mythIndex = 0;

        function updateMythologyFact() {
            const factBox = document.getElementById("fact-slider-text-mythology");
            if (!factBox) return;
            factBox.textContent = mythologyFacts[mythIndex];
            mythIndex = (mythIndex + 1) % mythologyFacts.length;
        }

        setInterval(updateMythologyFact, 3000);
        updateMythologyFact();
    }



    // Mythology Real or Fake game
    if (document.getElementById("mythology-optionA") && document.getElementById("mythology-optionB")) {

        const mythologyRealFacts = [
            "Hercules is famous for completing twelve labors.",
            "Thor wields a hammer called Mjölnir.",
            "Athena is the goddess of wisdom in Greek mythology.",
            "Ra was worshiped as the sun god in ancient Egypt."
        ];

        const mythologyFakeFacts = [
            "Zeus lived on the moon.",
            "Odin could breathe underwater.",
            "Medusa could fly to the stars.",
            "The phoenix lays golden eggs."
        ];

        function startMythologyGame() {
            const A = document.getElementById("mythology-optionA");
            const B = document.getElementById("mythology-optionB");
            const result = document.getElementById("mythology-game-result");

            if (!A || !B || !result) return;

            A.className = "fact-btn";
            B.className = "fact-btn";
            result.textContent = "";

            const real = mythologyRealFacts[Math.floor(Math.random() * mythologyRealFacts.length)];
            const fake = mythologyFakeFacts[Math.floor(Math.random() * mythologyFakeFacts.length)];
            const realOnA = Math.random() < 0.5;

            A.textContent = realOnA ? real : fake;
            B.textContent = realOnA ? fake : real;

            A.disabled = false;
            B.disabled = false;

            A.onclick = () => checkMythology(realOnA, A, B);
            B.onclick = () => checkMythology(!realOnA, B, A);
        }

        function checkMythology(correct, chosen, other) {
            const result = document.getElementById("mythology-game-result");

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

            setTimeout(startMythologyGame, 2000);
        }

        startMythologyGame();
    }


});