import React from "react";
import { ActionEnums } from "../../context/CounterContext/Actions";
import { useCounterContext } from "../../context/CounterContext/CounterContext";

export const CounterPage = () => {
  const { state, dispatch } = useCounterContext();

  const incrementHandler = () =>
    dispatch({
      type: ActionEnums.INCREMENT,
    });

  const decrementHandler = () =>
    dispatch({
      type: ActionEnums.DECREMENT,
    });

  const resetHandler = () =>
    dispatch({
      type: ActionEnums.RESET,
    });

  return (
    <div>
      <h1>Counter Page</h1>
      <div>
        <p>Context Count: {state.count}</p>
        <button type="button" onClick={incrementHandler}>
          Increment
        </button>
        <button type="button" onClick={resetHandler}>
          Reset
        </button>
        <button type="button" onClick={decrementHandler}>
          Decrement
        </button>
      </div>
    </div>
  );
};
