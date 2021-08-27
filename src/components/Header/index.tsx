import React from "react";
import { useCounterContext } from "../../context/CounterContext/CounterContext";
import { HeaderComponent } from "./Header";

export const Header = () => {
  const { state } = useCounterContext();
  return <HeaderComponent ctxCount={state.count} />;
};
