import { TOGGLE_TODO_MODAL } from "../types";

export const toggleTodoModal = (
  state = { toggleModal: false },
  action
) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_TODO_MODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal,
      };

    default:
      return state;
  }
};
