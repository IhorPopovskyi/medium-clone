import { ArticleStateInterface } from '../types/article-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { getArticleAction, getArticleActionFailure, getArticleActionSuccess } from './article.actions';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleActionSuccess,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleActionFailure,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
);

export function reducers(state: ArticleStateInterface, action: Action): ArticleStateInterface {
  return articleReducer(state, action);
}
