import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThirdRow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/trends')
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Trends</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.mots} - {item.freq}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThirdRow;
