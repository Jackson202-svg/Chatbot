from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message", "")

    # Basic chatbot logic
    if "hello" in message.lower():
        reply = "Hi there 👋"
    elif "how are you" in message.lower():
        reply = "I'm doing great, thanks!"
    else:
        reply = "I'm your free chatbot 😊"

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
