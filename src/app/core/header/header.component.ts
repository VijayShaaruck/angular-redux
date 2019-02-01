import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { Store, select } from '@ngrx/store';
import { State } from '../../auth/state/auth.reducers';
import { Observable } from 'rxjs';

import * as AuthActions from '../../auth/state/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<State>;
  username: Observable<State>;
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit() {
    this.authState = this.store.pipe(select('auth'));
    this.username = this.store.pipe(select('auth'));
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['login']);
  }
}
