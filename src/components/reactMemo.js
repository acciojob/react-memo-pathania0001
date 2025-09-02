
import React from "react";

// Child component (only re-renders when props change)
const TodoList = React.memo(({ todos }) => {
  console.log("TodoList re-rendered");
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
});

export default function ReactMemoExample({ todos }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>React.memo Example</h2>
      <TodoList todos={todos} />
    </div>
  );
}
