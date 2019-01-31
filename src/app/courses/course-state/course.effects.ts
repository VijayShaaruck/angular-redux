import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CourseService } from '../course.service';
import * as courseActions from '../course-state/course.actions';
import { Course } from '../course.model';

@Injectable()
export class CourseEffect {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  // load multiple courses
  @Effect()
  loadCourses$: Observable<Action> = this.actions$.pipe(
    ofType<courseActions.LoadCourses>(
      courseActions.CourseActionTypes.LOAD_COURSES
    ),
    mergeMap((action: courseActions.LoadCourses) =>
      this.courseService.getCourses().pipe(
        map(
          (courses: Course[]) => new courseActions.LoadCoursesSuccess(courses)
        ),
        catchError(err => of(new courseActions.LoadCoursesFail(err)))
      )
    )
  );

  // load single course
  @Effect()
  loadCourse$: Observable<Action> = this.actions$.pipe(
    ofType<courseActions.LoadCourse>(
      courseActions.CourseActionTypes.LOAD_COURSE
    ),
    mergeMap((action: courseActions.LoadCourse) =>
      this.courseService.getCourseById(action.payload).pipe(
        map((course: Course) => new courseActions.LoadCourseSuccess(course)),
        catchError(err => of(new courseActions.LoadCourseFail(err)))
      )
    )
  );

  // create course
  @Effect()
  createCourse$: Observable<Action> = this.actions$.pipe(
    ofType<courseActions.CreateCourse>(
      courseActions.CourseActionTypes.CREATE_COURSE
    ),
    map((action: courseActions.CreateCourse) => action.payload),
    mergeMap((course: Course) =>
      this.courseService.createCourse(course).pipe(
        map(
          (newCourse: Course) =>
            new courseActions.CreateCourseSuccess(newCourse)
        ),
        catchError(err => of(new courseActions.CreateCourseFail(err)))
      )
    )
  );

  // update course
  @Effect()
  updateCourse$: Observable<Action> = this.actions$.pipe(
    ofType<courseActions.UpdateCourse>(
      courseActions.CourseActionTypes.UPDATE_COURSE
    ),
    map((action: courseActions.UpdateCourse) => action.payload),
    mergeMap((course: Course) =>
      this.courseService.updateCourse(course).pipe(
        map(
          (updateCourse: Course) =>
            new courseActions.UpdateCourseSuccess({
              id: updateCourse.id,
              changes: updateCourse
            })
        ),
        catchError(err => of(new courseActions.UpdateCourseFail(err)))
      )
    )
  );

  // delete course
  @Effect()
  deleteCourse$: Observable<Action> = this.actions$.pipe(
    ofType<courseActions.DeleteCourse>(
      courseActions.CourseActionTypes.DELETE_COURSE
    ),
    map((action: courseActions.DeleteCourse) => action.payload),
    mergeMap((id: number) =>
      this.courseService.deleteCourse(id).pipe(
        map(() => new courseActions.DeleteCourseSuccess(id)),
        catchError(err => of(new courseActions.DeleteCourseFail(err)))
      )
    )
  );
}
