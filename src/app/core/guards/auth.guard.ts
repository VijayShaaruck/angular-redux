import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { map } from 'rxjs/operators';
import { State } from 'src/app/auth/state/auth.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}
  isAuthenticated: Observable<State>;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.isAuthenticated = this.store.pipe(select('auth'));
    // if (this.store.pipe((select('auth'))).pipe(
    //   map((value) => {
    //     return value
    //   });
    // ))
    return true;
  }
}
