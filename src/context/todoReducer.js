export const ADD_TODO = "ADD_TODO";
export const ACCOMPLISH_TODO = "ACCOMPLISH_TODO";

const handlers = {
  [ADD_TODO]: (state, { payload }) => ({
    ...state,
    todos: [...state.todos, payload],
  }),
  [ACCOMPLISH_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.map((t) => {
      if (t.id === payload.id) {
        return { ...t, accomplished: !payload.flag };
      }
      return t;
    }),
  }),

  DEFAULT: (state) => state,
};

export const todoReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
