import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../components/alerts/Alerts";
import { setAlert } from "../redux/actions/AlertActions";
import {
  cancelTodoEdit,
  updateTodo,
} from "../redux/actions/TodoActions";

const TodoEditModal = () => {
  const dispatch = useDispatch();

  const [editData, setEditData] = useState({
    todoNotes: "",
    deadline: "",
    isCompleted: false,
  });

  const onChange = (e) => {
    if (e.target.checked) {
      setEditData({
        ...editData,
        [e.target.name]: e.target.value,
      });
      setEditData({ ...editData, isCompleted: true });
    } else {
      setEditData({
        ...editData,
      });
      setEditData({ ...editData, isCompleted: false });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(editData));
    dispatch(cancelTodoEdit());
    dispatch(
      setAlert("todo updated successfully", "success")
    );
    // console.log(editData);
  };

  const { current } = useSelector((state) => state.todos);

  const { todoNotes, deadline, isCompleted } = editData;

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
              type="checkbox"
              name="isCompleted"
              id="isCompleted"
              className="isCompleted"
              value={isCompleted}
              onChange={onChange}
            />{" "}
            Mark as Completed
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
