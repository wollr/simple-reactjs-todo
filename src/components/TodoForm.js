import React, { useRef, useEffect } from "react";

import classes from "./TodoForm.module.css";
import Button from "./UI/Button";

const TodoForm = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredInput = inputRef.current.value;
    props.onAddTodo(enteredInput);
    inputRef.current.value = "";
  };

  return (
    <div className={classes["todo-form"]}>
      <form onSubmit={submitHandler}>
        <input ref={inputRef} type="text" placeholder="Напишите задачу..." />
        <Button type="submit">Добавить</Button>
      </form>
    </div>
  );
};

export default TodoForm;