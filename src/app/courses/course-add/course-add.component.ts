import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../course.model';
import { Store } from '@ngrx/store';

import * as courseActions from '../course-state/course.actions';
import * as courseReducers from '../course-state/course.reducer';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<courseReducers.AppState>
  ) {}
  courseForm: FormGroup;
  ngOnInit() {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      price: [null, Validators.required],
      description: ['', Validators.required],
      membership: ['', Validators.required]
    });
  }
  createCourse() {
    const newCourse: Course = {
      name: this.courseForm.get('name').value,
      price: this.courseForm.get('price').value,
      description: this.courseForm.get('description').value,
      membership: this.courseForm.get('membership').value
    };

    this.store.dispatch(new courseActions.CreateCourse(newCourse));

    this.courseForm.reset();
  }
}
