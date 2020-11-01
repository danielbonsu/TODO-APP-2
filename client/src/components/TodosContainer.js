import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import {
  addTodo,
  getAllTodos,
} from "../redux/actions/TodoActions";

import Alert from "../components/alerts/Alerts";
import { setAlert } from "../redux/actions/AlertActions";

const TodosContainer = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const { alerts } = useSelector((state) => state.alerts);
  console.log(alerts);
  const [data, setData] = useState({
    todoNotes: "",
    deadline: "",
  });

  const { todoNotes, deadline } = data;

  const onSubmit = (e) => {
    e.preventDefault();

    if (data.todoNotes === "" || data.deadline === "") {
      dispatch(
        setAlert("No field should be blank ", "danger")
      );
    } else {
      dispatch(addTodo(data));
      dispatch(
        setAlert("Todo Added successfully", "success")
      );
    }

    setData({
      todoNotes: "",
      deadline: "",
    });
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getAllTodos());
  }, [getAllTodos, dispatch]);

  return (
    <div className="container">
      {alerts &&
        alerts.map((alert) => (
          <Alert key={alert.id} variant={alert.variant}>
            {alert.msg}
          </Alert>
        ))}
      <div className="header">
        <h4>TODO APP</h4>
      </div>
      <div className="todoFilters">
        <div className="all-todos filterItem ">
          <a href="#!" className="filterItemLink">
            <i class="fas fa-list-alt"></i>
            <h5>ALL</h5>
          </a>
        </div>
        <div className="completed-todos filterItem">
          <a href="#!" className="filterItemLink">
            <i class="fas fa-clock"></i>
            <h5>Active</h5>
          </a>
        </div>
        <div className="active-todos filterItem">
          <a href="#!" className="filterItemLink">
            <i class="fas fa-clipboard-check"></i>
            <h5>Completed</h5>
          </a>
        </div>

        <div className="active-todos filterItem">
          <a href="#!" className="filterItemLink">
            <i class="fas fa-clipboard-check"></i>
            <h5>OverDue</h5>
          </a>
        </div>
      </div>
      <div className="todoBody">
        <form className="todoForm" onSubmit={onSubmit}>
          <label>Todo Notes</label>
          <input
            type="text"
            name="todoNotes"
            id="todoNotes"
            placeholder="Enter anything"
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

      <div className="bannerContainer">
        <div className="todolist-banner">
          <span>Current List</span>
          <span>Total: {todos.length}</span>
        </div>
      </div>

      <div className="todoItems">
        {todos &&
          todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
      </div>
    </div>
  );
};

export default TodosContainer;
