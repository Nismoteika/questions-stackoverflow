import React, { useEffect, useState } from 'react';
import './App.scss';
import { apiBase } from '../../api';
import ListQuestions from '../ListQuestions/ListQuestions';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/search?intitle=react&site=stackoverflow`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setQuestions(data.items);
      })
  }, [])

  return (
    <div className="App">
      <ListQuestions list={questions} />
    </div>
  );
}

export default App;
