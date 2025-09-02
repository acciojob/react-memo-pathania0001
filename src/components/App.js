import React, { useState } from "react";
import UseMemoExample from "./UseMemo";
import ReactMemoExample from "./ReactMemo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState("");

  // Add default todo
  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  // Add custom todo with validation
  const addCustomTodo = () => {
    if (taskInput.length > 5) {
      setTodos([...todos, taskInput]);
      setTaskInput("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  return (
    <div className="app" style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>React Memo + useMemo Example</h1>

      {/* Counter Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>

      {/* Todo Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Todos</h2>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>

        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter custom task..."
        />
        <button onClick={addCustomTodo}>Submit</button>
      </div>

      
      <UseMemoExample counter={counter} />
      <ReactMemoExample todos={todos} />
    </div>
  );
}
