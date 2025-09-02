import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += num * 2;
    }
    return result;
  };

  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>UseMemo Demo</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Expensive Calculation Result: {calculatedValue}</p>
    </div>
  );
}

export default UseMemoDemo;
