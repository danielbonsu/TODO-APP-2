import {
  ADD_TODO,
  DELETE_TODO,
  GET_ALL_TODOS,
} from "../types";

export const todoReducer = (
  state = { todos: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(
            (todo) => todo._id !== payload
          ),
        ],
      };

    case GET_ALL_TODOS:
      return {
        ...state,
        todos: payload,
      };

    default:
      return state;
  }
};
