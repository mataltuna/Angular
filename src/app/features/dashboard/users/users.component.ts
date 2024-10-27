import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { StudentsService } from '../../../core/services/students.service';
import { Student } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'courses', 'actions'];
  dataSource: Student[] = [];
  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.loadStuds();
  }

  loadStuds(): void {
    this.isLoading = true;
    this.studentsService.getStudents().subscribe({
      next: (student) => {
        this.dataSource = student;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onDelete(id: string) {
    if (confirm('¿Esta seguro de eliminar al estudiante?')) {
      this.isLoading = true;
      this.studentsService.removeStudById(id).subscribe({
        next: (student) => {
          this.dataSource = student;
        },
        error: (err) => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
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
              this.handleUpdate(editingStudent.id, result);
            } else {
              this.dataSource = [...this.dataSource,{ ...result}]
            }
          }
        }
      })
  }
  handleUpdate(id: string, update: Student): void {
    this.isLoading = true;
    this.studentsService.updateStudById(id, update).subscribe({
      next: (student) => {
        this.dataSource = student;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
