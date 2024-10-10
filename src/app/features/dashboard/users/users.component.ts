import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { Student } from './models';

/* TABLES */
const ELEMENT_DATA: Student[] = [
  {id: 'ASD65T', firstname: 'Matias', lastname: 'Altuna', email: 'maty@gmail.com', courses: ['Programación Backend', 'Programación Frontend']},
  
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'courses', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(private matDialog: MatDialog) {}


  openModal(): void {
    this.matDialog.open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          console.log('Recibimos: ', result);

          if(!!result) {
            this.dataSource = [...this.dataSource, ]
          }
        }
      })
  }
}
