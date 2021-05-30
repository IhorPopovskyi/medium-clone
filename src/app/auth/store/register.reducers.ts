import { AuthStateInterface } from '../types/authState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction, registerFailureAction, registerSuccessAction } from './register.actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => ({ ...state, isSubmitting: true, validationErrors: null })),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function registerReducers(state: AuthStateInterface, action: Action): AuthStateInterface {
  return authReducer(state, action);
}
