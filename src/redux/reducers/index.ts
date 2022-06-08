import { combineReducers } from "redux";
import { counterReducers } from "./counterReducers";

export const reducers = combineReducers({
  counter: counterReducers,
});
