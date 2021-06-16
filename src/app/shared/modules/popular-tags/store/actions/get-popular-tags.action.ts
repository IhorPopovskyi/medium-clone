import { createAction, props } from '@ngrx/store';
import { ActionsTypes } from '../actions-types';
import { PopularTagsType } from '../../../../types/popular-tags-type';

export const getPopularTagsAction = createAction(ActionsTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction(
  ActionsTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagsType[] }>()
);

export const getPopularTagsFailureAction = createAction(ActionsTypes.GET_POPULAR_TAGS_FAILURE);
