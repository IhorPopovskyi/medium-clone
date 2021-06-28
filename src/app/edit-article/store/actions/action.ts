import { createAction, props } from '@ngrx/store';
import { ArticleInputInterface } from '../../../shared/types/article-input.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { ArticleInterface } from '../../../shared/types/article.interface';
import { ActionTypes } from '../../types/action-types';

export const editArticleAction = createAction(
  ActionTypes.EDIT_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
);

export const editArticleSuccessAction = createAction(
  ActionTypes.EDIT_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const editArticleFailureAction = createAction(
  ActionTypes.EDIT_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE,
);
