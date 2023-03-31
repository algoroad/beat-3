
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo !== "") {
      setTodoList([...todoList, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
