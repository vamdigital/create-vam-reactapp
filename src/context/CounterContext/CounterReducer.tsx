import { ActionEnums, CounterActionType } from "./Actions";
import { ICTXState } from "./CounterContext";

export const initialState: ICTXState = {
  count: 0,
};

export const CounterReducer = (
  state = initialState,
  action: CounterActionType
) => {
  switch (action.type) {
    case ActionEnums.INCREMENT:
      return {
        count: state.count + 1,
      };

    case ActionEnums.DECREMENT:
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };

    case ActionEnums.RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};
