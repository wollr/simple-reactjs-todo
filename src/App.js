import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (inputData) => {
    if (inputData) {
      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        task: inputData,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodoHandler = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div className="App">
      <header>
        {todos.length === 0 && <h1>Чем займемся?</h1>}
        {todos.length > 0 && <h1>Осталось дел: {todos.length}</h1>}
      </header>
      <TodoForm onAddTodo={addTodoHandler} />
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} onRemoveTodo={removeTodoHandler} />
        );
      })}
    </div>
  );
}

export default App;
