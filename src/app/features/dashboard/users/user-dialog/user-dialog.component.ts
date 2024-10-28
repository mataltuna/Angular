import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Student } from '../../../../shared/models';

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

  constructor(
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: StudentDialogData
  ) {
    this.studentForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      courses: [null, [Validators.required]],
    });
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingStudent;
  }

  patchFormValue() {
    if(this.data?.editingStudent){
      this.studentForm.patchValue(this.data.editingStudent)
      console.log(this.data.editingStudent)
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
          : generateRandomString(5)
      });
    }
  }
}
