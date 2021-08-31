import { HeaderComponent } from "@components/Header/Header";
import { useCounterContext } from "@context/CounterContext/CounterContext";
import React from "react";

export const Header = () => {
  const { state } = useCounterContext();
  return <HeaderComponent ctxCount={state.count} />;
};
