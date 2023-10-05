import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import TodoReducer from "./features/todo/TodoReducer.js";

const store = createStore(TodoReducer, composeWithDevTools());

export default store;
