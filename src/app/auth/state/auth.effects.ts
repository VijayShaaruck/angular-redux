import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { AuthActionTypes } from './auth.actions';
import { AuthService, LoginResponse } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService
  ) {}

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: AuthActions.Login) => {
      return action.payload;
    }),
    mergeMap((authData: { username: string; password: string }) => {
      return this.authService.login(authData.username, authData.password).pipe(
        map((value: LoginResponse) => {
          this.router.navigate(['/courses']);
          return new AuthActions.LoginSuccess({
            username: value.username,
            token: value.token
          });
        }),
        catchError(err => {
          return of(new AuthActions.LoginFail(err));
        })
      );
    })
  );
}
