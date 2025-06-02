from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/analyze', methods=['GET', 'POST'])
def analyze():
    return jsonify({"sentiment": "positive", "confidence": 0.95})

if __name__ == '__main__':
    app.run(port=5000)
