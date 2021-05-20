import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Welcome to counter app</h1>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App;
