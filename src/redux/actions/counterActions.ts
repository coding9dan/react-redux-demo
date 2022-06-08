import { ICount } from "./../../types/model";
import { ActionTypes } from "../constants/action-types";

export const increaseCount = (count?: ICount) => {
  return {
    type: ActionTypes.INCREASE_COUNT,
    payload: count,
  };
};

export const decreaseCount = (count?: ICount) => {
  return {
    type: ActionTypes.DECREASE_COUNT,
    payload: count,
  };
};

export const resetCount = (count?: ICount) => {
  return {
    type: ActionTypes.RESET_COUNT,
    payload: count,
  };
};

export const addByNumber = (number: number) => {
  return {
    type: ActionTypes.ADD_BY_COUNT,
    payload: Number(number),
  };
};
