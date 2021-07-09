import { createAction, props } from '@ngrx/store';
import { GetUserProfileActionTypes } from '../get-user-profile-action-types';
import { ProfileInterface } from '../../../shared/types/profile.interface';

export const getUserProfileAction = createAction(
  GetUserProfileActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>()
);

export const getUserProfileSuccessAction = createAction(
  GetUserProfileActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: ProfileInterface }>()
);

export const getUserProfileFailureAction = createAction(
  GetUserProfileActionTypes.GET_USER_PROFILE_FAILURE
);
