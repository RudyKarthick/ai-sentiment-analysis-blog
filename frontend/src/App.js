import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

  const handleSubmit = async () => {
    // For Day 1: just display dummy sentiment without backend
    setSentiment('Positive (dummy)');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>AI-Powered Sentiment Analysis</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <br />
      <button onClick={handleSubmit}>Analyze Sentiment</button>
      <p>Sentiment: {sentiment}</p>
    </div>
  );
}

export default App;
