import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-fe',
  templateUrl: './fe.component.html',
  styleUrls: ['./fe.component.scss']
})
export class FeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.pipe(select('courses')).subscribe(values => {
      console.log(values);
    });
  }
}
