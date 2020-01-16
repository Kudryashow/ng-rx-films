import { initialUserState, IUserState } from "../state/user.state";
import { EUserActions } from "../actions/user.actions";

export interface Action {
  type: string,
  payload: any
}

export const userReducers = (state = initialUserState, action: Action): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess:
      return {
        ...state,
        users: action.payload
      };
    case EUserActions.GetUserSuccess:
      return {
        ...state,
        selectedUser: action.payload
      };
    default:
      return state;
  }
};