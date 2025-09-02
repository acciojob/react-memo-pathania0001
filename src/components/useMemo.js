import React, { useMemo } from "react";

export default function UseMemoExample({ counter }) {
  // Expensive calculation example
  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += num;
    }
    return total;
  };

  // useMemo caches the result unless counter changes
  const calculatedValue = useMemo(() => expensiveCalculation(counter), [counter]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>useMemo Example</h2>
      <p>Calculated Value: {calculatedValue}</p>
    </div>
  );
}