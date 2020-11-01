import {
  ADD_TODO,
  DELETE_TODO,
  GET_ALL_TODOS,
  EDIT_TODO,
  CANCEL_TODO_EDIT,
  UPDATE_TODO,
} from "../types";
import axios from "axios";

export const addTodo = (todo) => async (dispatch) => {
  try {
    const res = await axios.post("/api/todos", todo);

    dispatch({
      type: ADD_TODO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  const res = await axios.delete(`/api/todos/${id}`);

  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

export const editTodo = (todo_obj) => (dispatch) => {
  dispatch({
    type: EDIT_TODO,
    payload: todo_obj,
  });
};

export const updateTodo = (updated_todo) => (dispatch) => {
  dispatch({
    type: UPDATE_TODO,
    payload: updated_todo,
  });
};

export const cancelTodoEdit = () => (dispatch) => {
  dispatch({
    type: CANCEL_TODO_EDIT,
  });
};

export const getAllTodos = () => async (dispatch) => {
  const res = await axios.get("/api/todos");

  dispatch({
    type: GET_ALL_TODOS,
    payload: res.data,
  });
};
