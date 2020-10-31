import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions/TodoActions";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="todoItemContainer">
        <p>{todo.todoNotes}</p>
        <div className="modifiers">
          <i
            className="fas fa-trash-alt"
            onClick={() => dispatch(deleteTodo(todo._id))}
          ></i>
          <i className="fas fa-edit"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoItem;
