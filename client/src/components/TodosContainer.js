import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import {
  addTodo,
  getAllTodos,
} from "../redux/actions/TodoActions";

const TodosContainer = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const [data, setData] = useState({
    todoNotes: "",
    deadline: "",
  });

  const { todoNotes, deadline } = data;

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(data));
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getAllTodos());
  }, [getAllTodos, dispatch]);

  return (
    <div className="container">
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
      </div>
      <div className="todoBody">
        <form className="todoForm" onSubmit={onSubmit}>
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
