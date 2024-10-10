import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Student } from '../models';

interface StudentDialogData {
  editingUser?: Student;
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styles: `
  #user-form {
    padding: 4px 0;
  }`
})
export class UserDialogComponent {
  studentForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: StudentDialogData
  ) {

    this.studentForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      courses: [null, [Validators.required]],
    });
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingUser;
  }

  patchFormValue() {
    if(this.data?.editingUser) {
      this.studentForm.patchValue(this.data.editingUser)
    }
  }

  onAdd(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.studentForm.value,
        id: generateRandomString(5)

      });
    }
  }
}
