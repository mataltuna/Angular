import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course, Student } from '../../../../shared/models';
import { selectCoursesOptions, selectStudentsOptions } from '../store/enrollment.selectors';
import { EnrollmentActions } from '../store/enrollment.actions';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface EnrollDialogData {
  editingEnroll?: Student;
}

@Component({
  selector: 'app-enrollments-dialog',
  templateUrl: './enrollments-dialog.component.html',
  styleUrl: './enrollments-dialog.component.scss'
})
export class EnrollmentsDialogComponent {
  enrollForm: FormGroup
  coursesOpts$: Observable<Course[]>
  studOpts$: Observable<Student[]>

  constructor(
    private matDialogRef: MatDialogRef<EnrollmentsDialogComponent>,
    private store: Store,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: EnrollDialogData
  ) {
    this.enrollForm = this.formBuilder.group({
      courseId: [null, [Validators.required]],
      studId: [null, [Validators.required]]
    })
    
    this.coursesOpts$ = this.store.select(selectCoursesOptions)
    this.studOpts$ = this.store.select(selectStudentsOptions)
  }
  
  onSubmit(): void {
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched()
    } else {
      this.store.dispatch(EnrollmentActions.createEnrollment(this.enrollForm.value))
      this.enrollForm.reset()
      this.matDialogRef.close()
    }
  }
}
