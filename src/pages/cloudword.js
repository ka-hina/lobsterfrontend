import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WordCloud from 'react-d3-cloud';

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/words');
      setWords(response.data);
    };

    fetchData();
  }, []);

  const fontSizeMapper = (word) => 15 + (10 - word.rank) * 2;

  return (
    <div className="App">
      <h1>Top 10 des mots</h1>
      <WordCloud
        data={words.map((word, index) => {
          return { text: word.mots, value: word["fréquence d'apparition"], rank: index };
        })}
        fontSizeMapper={fontSizeMapper}
        width={600}
        height={400}
        padding={2}
      />
    </div>
  );
}

export default App;
