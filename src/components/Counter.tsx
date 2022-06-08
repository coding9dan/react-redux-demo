import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ICountState } from "../redux/store";
import {
  increaseCount,
  decreaseCount,
  resetCount,
  addByNumber,
} from "../redux/actions/counterActions";
import { Props } from "../types/model";

const Counter = ({ message }: Props) => {
  const [number, setNumber] = useState(0);
  const count = useSelector((state: ICountState) => state.counter.count);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(increaseCount());
  };

  const decreaseHandler = () => {
    if (count > 0) {
      dispatch(decreaseCount());
    }
  };

  const resetHandler = () => {
    dispatch(resetCount());
  };

  const onChangeHandler = (e: any) => {
    setNumber(e.target.value);
  };

  const addByNumberHandler = () => {
    dispatch(addByNumber(number));
  };

  const Counters = () => (
    <div className="counter-wrap">
      <h3>
        {message}: {count}
      </h3>
      <div
        className="button-wrap"
        data-before="Counter header"
        data-after="Counter footer"
      >
        <button onClick={decreaseHandler}>-</button>
        <button onClick={increaseHandler}>+</button>
        <button onClick={resetHandler}>reset</button>
      </div>
      <div>
        <input size={1} value={number} onChange={onChangeHandler} />
        <button onClick={addByNumberHandler}>add by {number}</button>
      </div>
    </div>
  );

  return (
    <>
      <Counters />
    </>
  );
};

export default Counter;
