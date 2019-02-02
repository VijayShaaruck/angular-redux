import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AppActions from '../../state/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  URLs = ['/fe/'];
  authState: Observable<AppState>;
  selectedFEState: Observable<AppState>;

  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit() {
    this.authState = this.store.pipe(select('auth'));
    this.selectedFEState = this.store.pipe(select('fes'));
  }

  logout() {
    this.store.dispatch(new AppActions.Logout());
    this.router.navigate(['/home']);
  }

  onSelect(fe) {
    this.store.dispatch(new AppActions.SetFE(fe));
  }

  get show() {
    return this.URLs.findIndex(url => this.router.url.startsWith(url)) > -1;
  }
}
