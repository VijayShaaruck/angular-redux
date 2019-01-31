import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../course.model';
import * as courseReducer from '../course-state/course.reducer';
import * as courseActions from '../course-state/course.actions';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<courseReducer.AppState>
  ) {}

  ngOnInit() {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      price: [null, Validators.required],
      description: ['', Validators.required],
      membership: ['', Validators.required],
      id: null
    });

    const course$: Observable<Course> = this.store.select(
      courseReducer.getCurrentCourse
    );

    course$.subscribe(currentCourse => {
      if (currentCourse) {
        this.courseForm.patchValue({
          name: currentCourse.name,
          price: currentCourse.price,
          description: currentCourse.description,
          membership: currentCourse.membership
        });
      }
    });
  }

  updateCourse() {
    const updatedCourse: Course = {
      name: this.courseForm.get('name').value,
      price: this.courseForm.get('price').value,
      description: this.courseForm.get('description').value,
      membership: this.courseForm.get('membership').value,
      id: this.courseForm.get('id').value
    };

    this.store.dispatch(new courseActions.UpdateCourse(updatedCourse));
  }
}
