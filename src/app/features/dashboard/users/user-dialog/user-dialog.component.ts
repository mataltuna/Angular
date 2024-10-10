import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(private matDialogRef: MatDialogRef<UserDialogComponent>, private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: [],
      courses: [],
    })
  }

  onAdd(): void {
    this.matDialogRef.close({ result: 'hola'})
  }
}
