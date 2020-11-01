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

export const updateTodo = (todo) => async (dispatch) => {
  console.log(todo._id);
  try {
    const res = await axios.put(`/api/todos/${todo._id}`);

    console.log(res);

    dispatch({
      type: UPDATE_TODO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompleted = () => (dispatch) => {
  dispatch({
    type: GET_COMPLETED,
  });
};

export const clearCompleted = () => (dispatch) => {
  dispatch({
    type: CLEAR_COMPLETED,
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
