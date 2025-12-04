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
    // Load your script as-is (it will execute immediately)
    require("../game1.js");
  
    const quiz = document.getElementById("quiz");
  
    // Should have the first question readdy
    expect(quiz.querySelector("h2").textContent.length).toBeGreaterThan(0);
  
    // Should have 4 buttons
    expect(quiz.querySelectorAll(".quiz-button").length).toBe(4);
  });
  