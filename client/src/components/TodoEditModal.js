import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cancelTodoEdit,
  updateTodo,
} from "../redux/actions/TodoActions";

const TodoEditModal = () => {
  const dispatch = useDispatch();

  const [editData, setEditData] = useState({
    todoNotes: "",
    deadline: "",
  });

  const onChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(editData));
    dispatch(cancelTodoEdit());
  };

  const { current } = useSelector((state) => state.todos);

  const { todoNotes, deadline } = editData;

  useEffect(() => {
    if (current !== null || "") {
      setEditData(current);
    }
  }, [current, setEditData]);

  return (
    <div
      className={!current ? "overlay hideModal" : "overlay"}
    >
      <div className="overlay-cover"></div>

      <div className="modal">
        <div className="modal-header">
          <h4>
            <i className="fas fa-cog"></i>
            Edit Todo
          </h4>
          <i
            className="fas fa-times-circle"
            onClick={() => dispatch(cancelTodoEdit())}
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
              value={current ? "Update Todo" : "Add Todo"}
              className="submitBTN"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoEditModal;
