/**
 * @jest-environment jsdom
 */

beforeEach(() => {
  // Load fake HTML before the script runs
  document.body.innerHTML = `
      <div id="quiz"></div>
      <div id="quiz-result"></div>
    `;

  // Clear cached modules so game1.js re-runs each test
  jest.resetModules();
});

test("showQuestion() renders first question", () => {
  require("../game1.js");

  const quiz = document.getElementById("quiz");

  // it should have the first question readdy
  expect(quiz.querySelector("h2").textContent.length).toBeGreaterThan(0);
  //should have all 4 options
  expect(quiz.querySelectorAll(".quiz-button").length).toBe(4);
});
