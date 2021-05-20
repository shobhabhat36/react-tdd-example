import React, { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Welcome to counter app</h1>
            <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
            <div id="counter-value">{counter}</div>
            <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}