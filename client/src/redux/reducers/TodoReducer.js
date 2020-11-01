import {
  ADD_TODO,
  DELETE_TODO,
  GET_ALL_TODOS,
  EDIT_TODO,
  CANCEL_TODO_EDIT,
  UPDATE_TODO,
  GET_COMPLETED,
  CLEAR_COMPLETED,
} from "../types";

export const todoReducer = (
  state = { todos: [], current: "", completed: "" },
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

    case GET_COMPLETED:
      return {
        ...state,
        completed: state.todos.filter(
          (todo) => todo.isCompleted === true
        ),
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        completed: "",
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
