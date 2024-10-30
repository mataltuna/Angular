import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../models';
import { generateRandomString } from '../../../../shared/utils';

interface CourseDialogData {
  editingCourse?: Course;
}

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styles: `
    #course-form {
      padding: 4px 0;
      width: auto;
    }
  `
})
export class CoursesDialogComponent {
  courseForm: FormGroup;
  constructor (
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: CourseDialogData,
  ) {
    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      maxAlumn: ['', [Validators.required]]
    })
    this.patchFormValue()
  }

  private get isEditing() {
    return !!this.data?.editingCourse;
  }

  patchFormValue() {
    if(this.data?.editingCourse){
      this.courseForm.patchValue(this.data.editingCourse)
    }
  }

  onAdd(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.courseForm.value,
        id: this.isEditing
          ? this.data!.editingCourse!.id 
          : generateRandomString(4),
        createdAt: this.isEditing
          ? this.data!.editingCourse!.createdAt
          : new Date(),
      });
    }
  }
}
