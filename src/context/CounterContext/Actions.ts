export enum ActionEnums {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
}

export type IncrementActionType = {
  type: ActionEnums.INCREMENT;
};

export type DecrementActionType = {
  type: ActionEnums.DECREMENT;
};

export type ResetActionType = {
  type: ActionEnums.RESET;
};

export type CounterActionType =
  | IncrementActionType
  | DecrementActionType
  | ResetActionType;
