import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Work");
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const categories = ["Work", "Personal", "Shopping", "Study"];

  const addTodo = () => {
    if (!input || !dueDate) return alert("Please enter task and due date");

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      dueDate,
      priority,
      category,
    };

    setTodos([...todos, newTodo]);
    setInput("");
    setDueDate("");
    setPriority("Low");
    setCategory("Work");
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

  // Filter tasks by selected category
  const filteredTodos = todos.filter((todo) => {
    const matchesCategory =
      filterCategory === "All" || todo.category === filterCategory;
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <h2>📝 To-Do List with Category Filter</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "6px", flex: "1" }}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={{ padding: "6px" }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: "6px" }}
        >
          <option value="Low">Low 🔵</option>
          <option value="Medium">Medium 🟠</option>
          <option value="High">High 🔴</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "6px" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button onClick={addTodo}>Add Task</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label><strong>Filter by Category:</strong></label>{" "}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          style={{ padding: "6px", marginTop: "5px" }}
        >
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search task..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: "6px", width: "200px" }}
        />

      </div>
     
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
