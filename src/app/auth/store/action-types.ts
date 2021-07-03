export enum ActionTypes {
  REGISTER = '[AUTH] Register',
  REGISTER_SUCCESS = '[AUTH] Register Success',
  REGISTER_FAILURE = '[AUTH] Register Failure',

  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login Success',
  LOGIN_FAILURE = '[AUTH] Login Failure',

  LOGOUT = '[AUTH] Logout',

  GET_CURRENT_USER = '[AUTH] Get Current User',
  GET_CURRENT_USER_SUCCESS = '[AUTH] Get Current User Success',
  GET_CURRENT_USER_FAILURE = '[AUTH] Get Current User Failure',

  UPDATE_CURRENT_USER = '[AUTH] Update Current User',
  UPDATE_CURRENT_USER_SUCCESS = '[AUTH] Update Current User Success',
  UPDATE_CURRENT_USER_FAILURE = '[AUTH] Update Current User Failure',
}
