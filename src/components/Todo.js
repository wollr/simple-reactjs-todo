import React from "react";
import classes from "./Todo.module.css";

const Todo = (props) => {
  return (
    <div
      className={classes["todo-item"]}
      onClick={() => props.onRemoveTodo(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;