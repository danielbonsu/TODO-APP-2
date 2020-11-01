import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { todoReducer } from "./redux/reducers/TodoReducer";
import { toggleTodoModal } from "./redux/reducers/UIDynamicsReducer";

import { setAlert } from "./redux/reducers/AlertReducer";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const rootReducer = combineReducers({
  todos: todoReducer,
  todoModal: toggleTodoModal,
  alerts: setAlert,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
