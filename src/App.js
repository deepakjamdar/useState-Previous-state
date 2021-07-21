import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [counter, setCounter] = useState(0);
 
  // handle button click event
  const handleClick = () => {
    setCounter(counter + 1);
  }
 
  // handle button click event to add 5 in counter
  const handleAddFiveClick = () => {
    for (let i = 0; i < 5; i++) {
      setCounter(counter + 1);
    }
  }

  const handleAddFivePrvClick = () => {
    for (let i = 0; i < 5; i++) {
      setCounter(prevState => prevState + 1);
    }
  }
 
  return <div className="App">
    <label>Counter: {counter}</label><br /><br />
    <button onClick={handleClick}>Add +1</button> 
    <button onClick={handleAddFiveClick}>Add +5</button>
    <button onClick={handleAddFivePrvClick}>Add +5(previous state)</button>
  </div>
  
  
}

export default App;
