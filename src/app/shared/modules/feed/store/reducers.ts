import { FeedStateInterface } from '../types/feed-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { getFeedAction, getFeedActionFailure, getFeedActionSuccess } from './actions/get-feed.actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedActionSuccess,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedActionFailure,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState)
);

export function feedReducers(state: FeedStateInterface, action: Action): FeedStateInterface {
  return feedReducer(state, action);
}
