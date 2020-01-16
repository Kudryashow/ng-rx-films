import { IConfigState, initialConfigState } from "../state/config.state";
import { Action } from "./user.reducers";
import { EUserActions } from "../actions/user.actions";
import { EConfigActions } from "../actions/config.actions";

export const configReducers = (state = initialConfigState, action: Action): IConfigState => {
  switch (action.type) {
    case EConfigActions.GetConfigSuccess:
      return {
        ...state,
        config: action.payload
      };
    default:
      return state;
  }
};