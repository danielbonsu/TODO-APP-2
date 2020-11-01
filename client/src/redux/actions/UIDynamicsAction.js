import { TOGGLE_TODO_MODAL } from "../types";

export const toggleTodoModal = () => (dispatch) => {
  dispatch({
    type: TOGGLE_TODO_MODAL,
  });
};
