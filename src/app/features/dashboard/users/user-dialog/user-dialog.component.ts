import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Student } from '../../../../shared/models';
import { CoursesService } from '../../../../core/services/courses.service';
import { Course } from '../../courses/models';
import { CoursesDialogComponent } from '../../courses/courses-dialog/courses-dialog.component';
import { Observable } from 'rxjs';

interface StudentDialogData {
  editingStudent?: Student;
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styles: `
    #user-form {
      padding: 4px 0;
    }
  `
})
export class UserDialogComponent {
  studentForm: FormGroup;
  courses$: Observable<Course[]>

  constructor(
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) public data?: StudentDialogData
  ) {
    this.studentForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      courses: ['', [Validators.required]],
    });
    this.courses$ = this.coursesService.getCourses()
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingStudent;
  }

  patchFormValue() {
    if(this.data?.editingStudent){
      this.studentForm.patchValue(this.data.editingStudent)
    }
  }

  onAdd(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.studentForm.value,
        id: this.isEditing
          ? this.data!.editingStudent!.id 
          : generateRandomString(5),
        token: this.isEditing
          ? this.data!.editingStudent!.id
          : generateRandomString(20)
      });
    }
  }
}
