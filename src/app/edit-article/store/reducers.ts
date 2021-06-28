import { Action, createReducer, on } from '@ngrx/store';
import { EditArticleStateInterface } from '../types/edit-article-state.interface';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/action';

const initialState: EditArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(
    editArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    editArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    editArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: EditArticleStateInterface, action: Action): EditArticleStateInterface {
  return editArticleReducer(state, action);
}
