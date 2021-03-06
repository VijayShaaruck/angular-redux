import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeState } from '../state/fe.reducers';
import { Store } from '@ngrx/store';
import { LoadData } from '../state/fe.actions';
import * as AppActions from '../../state/app.actions';

@Component({
  selector: 'app-feselect',
  templateUrl: './feselect.component.html',
  styleUrls: ['./feselect.component.scss']
})
export class FESelectComponent implements OnInit {
  feList: string[];

  constructor(private router: Router, private store: Store<FeState>) {}

  ngOnInit() {
    this.feList = ['001', '002', '003'];
    this.store.dispatch(new LoadData());
  }

  onSelect(fe) {
    this.store.dispatch(new AppActions.SetFE(fe));
    this.router.navigate(['/fe', fe]);
  }
}
