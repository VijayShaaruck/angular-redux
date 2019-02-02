import * as courseActions from './course.actions';
import { Course } from '../course.model';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

// export interface CourseState {
//   courses: Course[];
//   loading: boolean;
//   loaded: boolean;
//   error: string;
// }

export interface CourseState extends EntityState<Course> {
  selectedCourseId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  courses: CourseState;
}

export const courseAdapter: EntityAdapter<Course> = createEntityAdapter<
  Course
>();

export const defaultCourse: CourseState = {
  ids: [],
  entities: {},
  selectedCourseId: null,
  loading: false,
  loaded: false,
  error: ''
};

// export const initialState: CourseState = {
//   courses: [],
//   loading: false,
//   loaded: false,
//   error: ''
// };

export const initialState = courseAdapter.getInitialState(defaultCourse);

export function courseReducer(
  state = initialState,
  action: courseActions.Action
): CourseState {
  switch (action.type) {
    // load courses
    case courseActions.CourseActionTypes.LOAD_COURSES_SUCCESS: {
      // return {
      //   ...state,
      //   loading: false,
      //   loaded: true,
      //   courses: action.payload
      // };
      return courseAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case courseActions.CourseActionTypes.LOAD_COURSES_FAIL: {
      // return {
      //   ...state,
      //   courses: [],
      //   loading: false,
      //   loaded: false,
      //   error: action.payload
      // };
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    // load course
    case courseActions.CourseActionTypes.LOAD_COURSE_SUCCESS: {
      return courseAdapter.addOne(action.payload, {
        ...state,
        selectedCourseId: action.payload.id
      });
    }
    case courseActions.CourseActionTypes.LOAD_COURSE_FAIL: {
      return { ...state, error: action.payload };
    }

    // create course
    case courseActions.CourseActionTypes.CREATE_COURSE_SUCCESS: {
      return courseAdapter.addOne(action.payload, state);
    }
    case courseActions.CourseActionTypes.CREATE_COURSE_FAIL: {
      return { ...state, error: action.payload };
    }

    // update course
    case courseActions.CourseActionTypes.UPDATE_COURSE_SUCCESS: {
      return courseAdapter.updateOne(action.payload, state);
    }
    case courseActions.CourseActionTypes.UPDATE_COURSE_FAIL: {
      return { ...state, error: action.payload };
    }

    // delete course
    case courseActions.CourseActionTypes.DELETE_COURSE_SUCCESS: {
      return courseAdapter.removeOne(action.payload, state);
    }
    case courseActions.CourseActionTypes.DELETE_COURSE_FAIL: {
      return { ...state, error: action.payload };
    }

    default: {
      return state;
    }
  }
}

const getCourseFeatureState = createFeatureSelector<CourseState>('courses');

export const getCourses = createSelector(
  getCourseFeatureState,
  // (state: CourseState) => state.courses
  courseAdapter.getSelectors().selectAll
);

export const getCoursesLoading = createSelector(
  getCourseFeatureState,
  (state: CourseState) => state.loading
);

export const getCoursesLoaded = createSelector(
  getCourseFeatureState,
  (state: CourseState) => state.loaded
);

export const getError = createSelector(
  getCourseFeatureState,
  (state: CourseState) => state.error
);

export const getCurrentCourseId = createSelector(
  getCourseFeatureState,
  (state: CourseState) => state.selectedCourseId
);

export const getCurrentCourse = createSelector(
  getCourseFeatureState,
  getCurrentCourseId,
  (state: CourseState) => state.entities[state.selectedCourseId]
);
