import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getArticleAction,
  getArticleActionFailure,
  getArticleActionSuccess,
  deleteArticleAction,
  deleteArticleActionFailure,
  deleteArticleActionSuccess,
} from './article.actions';
import { ArticleService } from '../../shared/services/article.service';
import { ArticleInterface } from '../../shared/types/article.interface';
import { Router } from '@angular/router';

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService, private router: Router) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleActionSuccess({ article });
          }),
          catchError(() => {
            return of(getArticleActionFailure());
          })
        );
      })
    )
  );

  deleteArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleActionSuccess();
          }),
          catchError(() => {
            return of(deleteArticleActionFailure());
          })
        );
      })
    )
  );

  redirectAfterDeleteArticle = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleActionSuccess),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );
}
