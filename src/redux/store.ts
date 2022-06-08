import { createStore } from "redux";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { ICount } from "../types/model";

export const store = createStore(reducers, composeWithDevTools());

export interface ICountState {
  counter: ICount;
}
