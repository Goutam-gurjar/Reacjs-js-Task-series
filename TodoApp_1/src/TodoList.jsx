import React from "react";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  const isOverdue = (dueDate) => {
    const today = new Date().toISOString().split("T")[0];
    return dueDate < today;
  };

  return (
    <ul style={{ paddingLeft: "0px" }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            listStyle: "none",
            padding: "10px",
            margin: "5px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
            backgroundColor: todo.completed ? "#e0ffe0" : "#fff",
          }}
        >
          <span
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              fontWeight: "bold",
              cursor: "pointer",
              display: "block",
            }}
          >
            {todo.text}
          </span>
          <small
            style={{
              color: isOverdue(todo.dueDate) && !todo.completed ? "red" : "gray",
            }}
          >
            Due: {todo.dueDate}
          </small>
          <br />
          <button onClick={() => deleteTodo(todo.id)} style={{ marginTop: "5px" }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
