import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { todoReducer } from "./redux/reducers/TodoReducer";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const rootReducer = combineReducers({ todos: todoReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
