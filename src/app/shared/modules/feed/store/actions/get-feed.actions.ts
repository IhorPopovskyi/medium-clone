import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';

export const getFeedAction = createAction(ActionTypes.GET_FEED, props<{ url: string }>());

export const getFeedActionSuccess = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>()
);

export const getFeedActionFailure = createAction(ActionTypes.GET_FEED_FAILURE);
