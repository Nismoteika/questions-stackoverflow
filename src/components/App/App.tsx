import { useEffect, useState } from 'react';
import './App.scss';
import { apiBase } from '../../api';
import ListQuestions from '../ListQuestions/ListQuestions';
import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';

function App() {
  const [questions, setQuestions] = useState([]);
  // false - asc, true - desc, need to reload param list
  // of component ListQuestions
  const [sortDirection, setSortDirection] = useState(false);

  useEffect(() => {
    fetch(`${apiBase}/search?intitle=react&site=stackoverflow`)
      .then(res => res.json())
      .then(data => {
        let arrQuestions = data.items;
        let minOwnerReputation = 50;
        arrQuestions = filter(arrQuestions, function(question) {
          if(question.is_answered
            && question.owner.reputation > minOwnerReputation) {
              return true;
            }
        });
        sortBy(arrQuestions, ['creation_date']);
        setQuestions(arrQuestions);
      })
  }, [])

  const handleSortDirBtn = (() => {
    setQuestions(questions.reverse());
    setSortDirection(!sortDirection);
  })

  return (
    <div className="App">
      <button onClick={handleSortDirBtn}>sort direction</button>
      { !questions ?
        <h2>Loading...</h2>
        :
        <ListQuestions list={questions} sortDirection={sortDirection} />
      }
    </div>
  );
}

export default App;
