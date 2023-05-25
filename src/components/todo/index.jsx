import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { deleteTodo, toggleCompleteness } from "../../store/slices/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleCompleteness({ id: todo.id }));
  };

  const deleteTodoItem = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <li className={styles.item} onClick={toggleTodoItem}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>
      <span onClick={deleteTodoItem}> ❌</span>
    </li>
  );
};
