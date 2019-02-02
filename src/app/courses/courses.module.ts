import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { courseReducer } from './course-state/course.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffect } from './course-state/course.effects';

const courseRoutes: Routes = [{ path: '', component: CourseComponent }];

@NgModule({
  declarations: [
    CourseComponent,
    CourseAddComponent,
    CourseEditComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(courseRoutes),
    StoreModule.forFeature('courses', courseReducer),
    EffectsModule.forFeature([CourseEffect])
  ]
})
export class CoursesModule {}
