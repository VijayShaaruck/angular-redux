import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course.model';
import { Store, select } from '@ngrx/store';
import * as courseActions from '../course-state/course.actions';
import * as courseReducer from '../course-state/course.reducer';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  // courses;
  courses$: Observable<Course[]>;
  error$: Observable<String>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new courseActions.LoadCourses());
    // this.store.subscribe(state => {
    //   this.courses = state.courses.courses;
    // });
    this.courses$ = this.store.pipe(select(courseReducer.getCourses));
    this.error$ = this.store.pipe(select(courseReducer.getError));
  }

  deleteCourse(course: Course) {
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.store.dispatch(new courseActions.DeleteCourse(course.id));
    }
  }

  editCourse(course: Course) {
    this.store.dispatch(new courseActions.LoadCourse(course.id));
  }
}
