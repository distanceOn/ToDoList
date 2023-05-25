import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from "./index.module.css";

export const TodoList = () => {
  const todos = useSelector(todosSelector);

  return (
    <div className={styles.lists}>
      <ul className={styles.list__uncompleted}>
        <div>Uncompleted</div>
        {todos.map(function (todo) {
          if (todo.deleted) {
            return "";
          } else {
            if (!todo.completed) {
              return <Todo key={todo.id} todo={todo} />;
            } else {
              return "";
            }
          }
        })}
      </ul>
      <ul className={styles.list__completed}>
        <div>Completed</div>
        {todos.map(function (todo) {
          if (todo.deleted) {
            return "";
          } else {
            if (todo.completed) {
              return <Todo key={todo.id} todo={todo} />;
            } else {
              return "";
            }
          }
        })}
      </ul>
    </div>
  );
};
