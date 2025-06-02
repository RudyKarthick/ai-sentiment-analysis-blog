from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS for frontend-backend communication

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    print("Received data:", data)  # Add debug line
    if data is None:
        return jsonify({"error": "Invalid JSON"}), 400
    text = data.get('text', '')
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    sentiment = "positive" if polarity > 0 else "negative" if polarity < 0 else "neutral"
    return jsonify({"sentiment": sentiment, "polarity": polarity})


if __name__ == '__main__':
    app.run(port=5000)
