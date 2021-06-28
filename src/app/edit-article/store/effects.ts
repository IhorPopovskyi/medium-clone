import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '../../shared/services/article.service';
import { ArticleInterface } from '../../shared/types/article.interface';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/action';

@Injectable()
export class EditArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService, private router: Router) {}

  editArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.articleService.editArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return editArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editArticleFailureAction({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );

  redirectAfterEdit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );
}
