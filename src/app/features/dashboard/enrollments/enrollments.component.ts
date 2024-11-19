import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { Observable } from 'rxjs';
import { Course, Enrollment, Student } from '../../../shared/models';
import { selectEnrollments, selectCoursesOptions, selectStudentsOptions } from './store/enrollment.selectors';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent implements OnInit {
  enrollments$: Observable<Enrollment[]>
  studOpts$: Observable<Student[]>
  coursesOpts$: Observable<Course[]>

  // isLoading = false;

  enrollForm: FormGroup

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.enrollForm = this.formBuilder.group({
      courseId: [null, [Validators.required]],
      studId: [null, [Validators.required]]
    })

    this.enrollments$ = this.store.select(selectEnrollments)
    this.coursesOpts$ = this.store.select(selectCoursesOptions)
    this.studOpts$ = this.store.select(selectStudentsOptions)
  }

  ngOnInit(): void {
    this.store.dispatch(EnrollmentActions.loadEnrollments())
    this.store.dispatch(EnrollmentActions.loadCoursesOptions())
    this.store.dispatch(EnrollmentActions.loadStudentsOptions())
  }
  
  onSubmit(): void {
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched()
    } else {
      this.store.dispatch(EnrollmentActions.createEnrollment(this.enrollForm.value))
      // this.enrollForm.reset()
    }
  }
}
