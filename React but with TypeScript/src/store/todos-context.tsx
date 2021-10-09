import React, { useState } from "react";
import Todo from "../models/todo";

type TOdosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TOdosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TOdosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
