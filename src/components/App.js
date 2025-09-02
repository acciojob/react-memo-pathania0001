import React, { useState } from "react";
import UseMemoDemo from "./UseMemo";
import ReactMemoDemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, "new todo"]);
  };

  return (
    <div>
      <h1>React Hooks Optimization Demo</h1>

      {/* Todo Section */}
      <h2>Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      {/* UseMemo Demo */}
      <UseMemoDemo />

      {/* React.memo Demo */}
      <ReactMemoDemo />
    </div>
  );
}

export default App;
