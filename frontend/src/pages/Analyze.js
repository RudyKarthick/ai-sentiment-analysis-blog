import React, { useState } from 'react';

function Analyze() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [polarity, setPolarity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError('Please enter some text.');
      return;
    }

    setLoading(true);
    setError('');
    setSentiment('');
    setPolarity(null);

    try {
      const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      setSentiment(data.sentiment);
      setPolarity(data.polarity);
    } catch (error) {
      console.error('Error:', error);
      setError('Error contacting backend.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setSentiment('');
    setPolarity(null);
    setError('');
  };

  return (
    <div className="container">
      <h2>Analyze Sentiment</h2>
      <textarea
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <div>
        <button onClick={handleSubmit}>Analyze</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      {loading && <p>Analyzing...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {sentiment && <p>Sentiment: {sentiment}</p>}
      {polarity !== null && <p>Polarity: {polarity}</p>}
    </div>
  );
}

export default Analyze;
