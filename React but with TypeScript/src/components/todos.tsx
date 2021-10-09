import { useContext } from "react";

import TodoItem from "../components/TodoItem";
import TodosContext from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          onRemove={todoCtx.removeTodo.bind(null, item.id)}
          text={item.text}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
