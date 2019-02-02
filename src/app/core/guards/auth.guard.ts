import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated = false;
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.validate();
    if (!this.isAuthenticated) {
      const targetUrl = state.url;
      this.router.navigate(['/login', { targetUrl }]);
    }
    return true;
  }
  private async validate() {
    await new Promise((resolve, reject) => {
      this.store.pipe(select('auth')).subscribe(value => {
        this.isAuthenticated = value ? value.authenticated : false;
        resolve();
      });
    });
  }
}
