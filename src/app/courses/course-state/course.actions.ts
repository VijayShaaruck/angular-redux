import { Action } from '@ngrx/store';

import { Course } from '../course.model';
import { Update } from '@ngrx/entity';

export enum CourseActionTypes {
  LOAD_COURSES = '[Course] Load Courses',
  LOAD_COURSES_SUCCESS = '[Course] Load Courses Success',
  LOAD_COURSES_FAIL = '[Course] Load Courses Fail',
  LOAD_COURSE = '[Course] Load Course',
  LOAD_COURSE_SUCCESS = '[Course] Load Course Success',
  LOAD_COURSE_FAIL = '[Course] Load Course Fail',
  CREATE_COURSE = '[Course] create Course',
  CREATE_COURSE_SUCCESS = '[Course] create Course Success',
  CREATE_COURSE_FAIL = '[Course] create Course Fail',
  UPDATE_COURSE = '[Course] update Course',
  UPDATE_COURSE_SUCCESS = '[Course] update Course Success',
  UPDATE_COURSE_FAIL = '[Course] update Course Fail',
  DELETE_COURSE = '[Course] delete Course',
  DELETE_COURSE_SUCCESS = '[Course] delete Course Success',
  DELETE_COURSE_FAIL = '[Course] delete Course Fail'
}

// Load Multiple Courses
export class LoadCourses implements Action {
  readonly type = CourseActionTypes.LOAD_COURSES;
}

export class LoadCoursesSuccess implements Action {
  readonly type = CourseActionTypes.LOAD_COURSES_SUCCESS;

  constructor(public payload: Course[]) {}
}

export class LoadCoursesFail implements Action {
  readonly type = CourseActionTypes.LOAD_COURSES_FAIL;

  constructor(public payload: string) {}
}

// Load single course
export class LoadCourse implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE;

  constructor(public payload: number) {}
}

export class LoadCourseSuccess implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE_SUCCESS;

  constructor(public payload: Course) {}
}

export class LoadCourseFail implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE_FAIL;

  constructor(public payload: string) {}
}

// Create Course
export class CreateCourse implements Action {
  readonly type = CourseActionTypes.CREATE_COURSE;

  constructor(public payload: Course) {}
}

export class CreateCourseSuccess implements Action {
  readonly type = CourseActionTypes.CREATE_COURSE_SUCCESS;

  constructor(public payload: Course) {}
}

export class CreateCourseFail implements Action {
  readonly type = CourseActionTypes.CREATE_COURSE_FAIL;

  constructor(public payload: string) {}
}

// Update course
export class UpdateCourse implements Action {
  readonly type = CourseActionTypes.UPDATE_COURSE;

  constructor(public payload: Course) {}
}

export class UpdateCourseSuccess implements Action {
  readonly type = CourseActionTypes.UPDATE_COURSE_SUCCESS;

  constructor(public payload: Update<Course>) {}
}

export class UpdateCourseFail implements Action {
  readonly type = CourseActionTypes.UPDATE_COURSE_FAIL;

  constructor(public payload: string) {}
}

// Delete course
export class DeleteCourse implements Action {
  readonly type = CourseActionTypes.DELETE_COURSE;

  constructor(public payload: number) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = CourseActionTypes.DELETE_COURSE_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteCourseFail implements Action {
  readonly type = CourseActionTypes.DELETE_COURSE_FAIL;

  constructor(public payload: string) {}
}

export type Action =
  | LoadCourses
  | LoadCoursesSuccess
  | LoadCoursesFail
  | LoadCourse
  | LoadCourseSuccess
  | LoadCourseFail
  | CreateCourse
  | CreateCourseSuccess
  | CreateCourseFail
  | UpdateCourse
  | UpdateCourseSuccess
  | UpdateCourseFail
  | DeleteCourse
  | DeleteCourseSuccess
  | DeleteCourseFail;
