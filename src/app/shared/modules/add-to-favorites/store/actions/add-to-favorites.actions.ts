import { createAction, props } from '@ngrx/store';
import { AddToFavoritesActionTypes } from '../add-to-favorites-action-types';
import { ArticleInterface } from '../../../../types/article.interface';

export const addToFavoritesAction = createAction(
  AddToFavoritesActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean; slug: string }>()
);

export const addToFavoritesSuccessAction = createAction(
  AddToFavoritesActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const addToFavoritesFailureAction = createAction(
  AddToFavoritesActionTypes.ADD_TO_FAVORITES_FAILURE
);
