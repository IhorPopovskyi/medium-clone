import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
