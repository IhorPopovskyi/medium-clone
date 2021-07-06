import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FavoriteArticleService } from '../../../../services/favorite-article.service';
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction,
} from '../actions/add-to-favorites.actions';
import { ArticleInterface } from '../../../../types/article.interface';

@Injectable()
export class AddToFavoritesEffects {
  constructor(private actions$: Actions, private favoriteArticleService: FavoriteArticleService) {}

  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.favoriteArticleService.removeFromFavorites(slug)
          : this.favoriteArticleService.addToFavorites(slug);
        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction());
          })
        );
      })
    )
  );
}
