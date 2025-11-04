// Replace this with your Render backend URL after deployment
const API_URL = "https://your-chatbot-backend.onrender.com/chat";

async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage("You: " + message);
  input.value = "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    addMessage("Bot: " + (data.reply || data.error || "No response"));
  } catch (err) {
    addMessage("Bot: (error connecting to backend)");
  }
}

function addMessage(text) {
  const chatBox = document.getElementById("chat-box");
  const p = document.createElement("p");
  p.textContent = text;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}
