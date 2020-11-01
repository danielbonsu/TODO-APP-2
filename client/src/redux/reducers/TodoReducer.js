import {
  ADD_TODO,
  DELETE_TODO,
  GET_ALL_TODOS,
  EDIT_TODO,
  CANCEL_TODO_EDIT,
  UPDATE_TODO,
} from "../types";

export const todoReducer = (
  state = { todos: [], current: "" },
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

    case EDIT_TODO:
      return {
        ...state,
        current: payload,
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === payload._id ? payload : todo
        ),
      };

    case CANCEL_TODO_EDIT:
      return {
        ...state,
        current: "",
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
