import { UserProfileStateInterface } from '../types/user-profile-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './actions/get-user-profile.action';

const initialState: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const reducers = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function userProfileReducers(state: UserProfileStateInterface, action: Action): UserProfileStateInterface {
  return reducers(state, action);
}
