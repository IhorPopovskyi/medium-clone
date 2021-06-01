import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../actions/get-current-user.actions';

@Injectable()
export class GetCurrentUserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistenceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );
}
