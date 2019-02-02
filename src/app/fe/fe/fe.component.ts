import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FE } from '../models/fe.model';
import * as feReducer from '../state/fe.reducers';

@Component({
  selector: 'app-fe',
  templateUrl: './fe.component.html',
  styleUrls: ['./fe.component.scss']
})
export class FeComponent implements OnInit {
  selectedFEState: Observable<string>;
  feState: Observable<FE>;
  constructor(private store: Store<feReducer.AppState>) {}

  ngOnInit() {
    this.selectedFEState = this.store.select(feReducer.getSelectedFE);
    this.feState = this.store.select(feReducer.getCurrentFE);
  }
}
