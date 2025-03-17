import { useState, useReducer } from 'react';
import { counterReducer, initialState } from './CounterReducer';

import React from 'react';

const Counter = () => {
  const [value, setValue] = useState(1);
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <form>
        <input type="number" placeholder="number" />
      </form>
      <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'incrementByAmount' })}>
          Increment by {value}
        </button>
        <button onClick={() => dispatch({ type: 'decrementByAmount' })}>
          Decrement by {value}
        </button>
      </div>
    </>
  );
};

export default Counter;
