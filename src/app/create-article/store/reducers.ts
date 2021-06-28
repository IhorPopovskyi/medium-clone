import { Action, createReducer, on } from '@ngrx/store';
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from './actions/action';
import { CreateArticleStateInterface } from '../types/create-article-state.interface';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state: CreateArticleStateInterface): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state: CreateArticleStateInterface): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state: CreateArticleStateInterface, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: CreateArticleStateInterface, action: Action): CreateArticleStateInterface {
  return createArticleReducer(state, action);
}
