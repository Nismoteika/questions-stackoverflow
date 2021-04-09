import { useEffect, useState } from 'react';
import './App.scss';
import { apiBase } from '../../api';
import ListQuestions from '../ListQuestions/ListQuestions';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/search?intitle=react&site=stackoverflow`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.items);
      })
  }, [])

  return (
    <div className="App">
      { !questions ?
        <h2>Loading...</h2>
        :
        <ListQuestions list={questions} />
      }
    </div>
  );
}

export default App;
