import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/state/app.state';
import { ClearCourses } from '../course-state/course.actions';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.store.dispatch(new ClearCourses());
  }
}
