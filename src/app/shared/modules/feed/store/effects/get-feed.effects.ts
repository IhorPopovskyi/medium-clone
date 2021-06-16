import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../../../../services/feed.service';
import { getFeedAction, getFeedActionFailure, getFeedActionSuccess } from '../actions/get-feed.actions';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';

@Injectable()
export class GetFeedEffects {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedActionSuccess({ feed });
          }),
          catchError(() => {
            return of(getFeedActionFailure());
          })
        );
      })
    )
  );
}
