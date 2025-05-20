import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTodo = () => {
    if (!input || !dueDate) return alert("Please enter task and due date");

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      dueDate: dueDate,
    };

    setTodos([...todos, newTodo]);
    setInput("");
    setDueDate("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>📝 To-Do List with Due Date</h2>

      <input
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginRight: "10px", padding: "6px" }}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ marginRight: "10px", padding: "6px" }}
      />
      <button onClick={addTodo}>Add Task</button>

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
