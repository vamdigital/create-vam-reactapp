import { createContext, useContext } from "react";
import { CounterActionType } from "./Actions";

export type ICTXState = {
  count: number;
};

export type ICTXDispatch = (action: CounterActionType) => void;

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error(
      "To use this context wrap the components in CounterProvider"
    );

  return context;
};
export const CounterContext = createContext<{
  state: ICTXState;
  dispatch: ICTXDispatch;
} | null>(null);
