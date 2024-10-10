import { Component } from '@angular/core';
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
  constructor(private matDialogRef: MatDialogRef<UserDialogComponent>) {}
  onAdd(): void {
    this.matDialogRef.close({ result: 'hola'})
  }
}
