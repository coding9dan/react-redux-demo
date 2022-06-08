import { ActionTypes } from "../constants/action-types";
import { ICount, ICountState } from "../../types/model";

const defaultCounterState: ICount = {
  count: 0,
};

export const counterReducers = (
  state: ICount = defaultCounterState,
  { type, payload }: ICountState
) => {
  switch (type) {
    case ActionTypes.INCREASE_COUNT:
      return {
        count: state.count + 1,
      };
    case ActionTypes.DECREASE_COUNT:
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };
    case ActionTypes.RESET_COUNT:
      return {
        count: 0,
      };
    case ActionTypes.ADD_BY_COUNT:
      return {
        count: state.count + payload,
      };
    default:
      return state;
  }
};
