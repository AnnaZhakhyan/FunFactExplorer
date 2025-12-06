/**
 * @jest-environment jsdom
 */

beforeEach(() => {
    document.body.innerHTML = `
        <button class="chatbot-toggler"></button>
        <button class="close-btn"></button>
        <ul id="chatBox"></ul>
        <input id="userInput">
        <button id="sendButton"></button>
    `;

    global.fetch = jest.fn();
    jest.resetModules();
});


test("createMessageElement returns an LI with the right content", () => {
    const { createMessageElement } = require("../Code/AI_script.js");

    const el = createMessageElement("Hello!", "bot-message");

    expect(el.tagName).toBe("LI");
    expect(el.classList.contains("bot-message")).toBe(true);
    expect(el.innerHTML).toContain("Hello!");
});

test("sendMessage() adds user message and bot response", async () => {
    const {
        sendMessage,
        conversationHistory
    } = require("../Code/AI_script.js");

    // Mock Gemini API response
    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
            candidates: [
                { content: { parts: [{ text: "Fake bot reply!" }] } }
            ]
        })
    });

    // Simulate user typing
    document.getElementById("userInput").value = "Hello bot!";

    await sendMessage();

    const chatOutput = document.getElementById("chatBox").textContent;

    expect(chatOutput).toContain("Hello bot!");        // user message
    expect(chatOutput).toContain("Fake bot reply!");   // bot message
    expect(conversationHistory.length).toBe(2);        // user + bot
});
