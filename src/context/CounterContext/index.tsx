import React, { useReducer } from "react";
import { CounterContext } from "./CounterContext";
import { CounterReducer, initialState } from "./CounterReducer";

interface IProps {
  children: React.ReactNode;
}

export const CounterContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
