import React from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

import { ADD_TODO, ACCOMPLISH_TODO } from "./todoReducer";

export const TodoState = ({ children }) => {
  const [state, dispatch] = React.useReducer(todoReducer, {
    todos: [],
  });

  const addTodo = (title) => {
    const payload = { id: Date.now(), title, accomplished: false };
    dispatch({ type: ADD_TODO, payload });
  };

  const accomplishTodo = (id, flag) => {
    const payload = { id, flag };
    dispatch({ type: ACCOMPLISH_TODO, payload });
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        accomplishTodo,
        todos: state.todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
