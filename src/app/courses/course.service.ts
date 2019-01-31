import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  getCourseById(payload: number): Observable<Course> {
    return this.http.get<Course>(`${this.coursesUrl}/${payload}`);
  }

  createCourse(payload: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, payload);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.patch<Course>(`${this.coursesUrl}/${course.name}`, course);
  }

  deleteCourse(payload: number) {
    return this.http.delete(`${this.coursesUrl}/${payload}`);
  }
}
