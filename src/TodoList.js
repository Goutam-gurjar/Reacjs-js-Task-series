import React, { useState } from 'react';

const TodoList = ({ todos, onDelete, onToggle, onEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: '10px' }}>
          {editId === todo.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                onClick={() => {
                  onEdit(todo.id, editText);
                  setEditId(null);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span
                onClick={() => onToggle(todo.id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
