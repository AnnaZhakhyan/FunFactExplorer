const GEMINI_API_KEY = "AIzaSyAHEmQtZvhpl7b2uGNA3g5-Wglz1YNE-as"; 
const CHAT_MODEL = 'gemini-2.5-flash'; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${CHAT_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_INSTRUCTION_TEXT = "You are a friendly, enthusiastic, and knowledgeable Fun Fact Chatbot for a public website. Your primary goal is to provide concise, interesting, and verified fun facts, and answer follow-up questions about the previous fact. Keep your answers brief (under 50 words) and engaging. Do not use markdown.";

const conversationHistory = [];

// DOM Elements
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Toggle Chatbot Visibility
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

// Helper to create message elements
const createMessageElement = (content, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("message", className);
    let htmlContent = `<p>${content}</p>`;
    chatLi.innerHTML = htmlContent;
    return chatLi;
}

function displayMessage(text, sender) {
    const className = sender === 'user' ? 'user-message' : 'bot-message';
    const messageElement = createMessageElement(text, className);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
    const userText = userInput.value.trim();
    if (userText === '') return;

    // 1. Display User Message
    displayMessage(userText, 'user');
    userInput.value = '';
    userInput.disabled = true;
    sendButton.disabled = true;

    // 2. Add to History
    conversationHistory.push({
        role: "user",
        parts: [{ text: userText }]
    });

    // 3. Show "Thinking..." placeholder (Optional, helps UX)
    const thinkingLi = createMessageElement("Thinking...", "bot-message");
    chatBox.appendChild(thinkingLi);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const requestBody = {
            contents: conversationHistory,
            systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION_TEXT }]
            },
            generationConfig: {
                temperature: 1.0
            }
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        // Remove "Thinking..." message
        chatBox.removeChild(thinkingLi);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const botText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (botText) {
            displayMessage(botText, 'bot');
            conversationHistory.push({
                role: "model",
                parts: [{ text: botText }]
            });
        } else {
            displayMessage("I couldn't find a fact for that. Try again!", 'bot');
        }

    } catch (error) {
        // Remove "Thinking..." message if it exists
        if(thinkingLi.parentNode === chatBox) chatBox.removeChild(thinkingLi);
        
        console.error('Gemini API Error:', error);
        displayMessage(`Oops! My brain froze. (Error: ${error.message})`, 'bot');
    } finally {
        userInput.disabled = false;
        sendButton.disabled = false;
        userInput.focus();
    }
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') sendMessage();
});