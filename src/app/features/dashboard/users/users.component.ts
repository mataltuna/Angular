import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { Student } from './models';

/* TABLES */
const ELEMENT_DATA: Student[] = [];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'courses', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(private matDialog: MatDialog) {}

  onDelete(id: string) {
    if (confirm('¿Esta seguro de eliminar al estudiante?')) {
      this.dataSource = this.dataSource.filter((student) => student.id !== id )
    }
  }

  openModal(editingStudent?: Student): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: {
          editingStudent
        }
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if(!!result) {
            if(editingStudent) {
              this.dataSource = this.dataSource.map((student => student.id === editingStudent.id ? {...student,...result} : student))
            } else {
              this.dataSource = [...this.dataSource,{ ...result}]
            }
          }
        }
      })
  }
}
