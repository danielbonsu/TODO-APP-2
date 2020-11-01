import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoModal } from "../redux/actions/UIDynamicsAction";

const TodoEditModal = () => {
  const [editData, setEditData] = useState({
    todoNotes: "",
    deadline: "",
  });

  const { todoNotes, deadline } = editData;

  const onChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(editData);
  };

  const dispatch = useDispatch();

  const { toggleModal } = useSelector(
    (state) => state.todoModal
  );

  console.log(toggleModal);

  return (
    <div
      className={
        !toggleModal ? "overlay hideModal" : "overlay"
      }
    >
      <div className="modal">
        <div className="modal-header">
          <h4>
            <i className="fas fa-cog"></i>
            Edit Todo
          </h4>
          <i
            className="fas fa-times-circle"
            onClick={() => dispatch(toggleTodoModal())}
          ></i>
        </div>

        <div className="modal-body">
          <form
            className="edit-modal-form"
            onSubmit={onSubmit}
          >
            <label>Todo Notes</label>
            <input
              type="text"
              name="todoNotes"
              id="todoNotes"
              className="todoNotes"
              value={todoNotes}
              onChange={onChange}
            />
            <label>Todo Deadline</label>
            <input
              type="date"
              name="deadline"
              id="deadline"
              className="deadline"
              value={deadline}
              onChange={onChange}
            />
            <input
              type="submit"
              value="Add Todo"
              className="submitBTN"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoEditModal;
