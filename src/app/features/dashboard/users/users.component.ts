import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { StudentsService } from '../../../core/services/students.service';
import { Student } from '../../../shared/models';
import { ActivatedRoute, Router } from '@angular/router';

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
    private studentsService: StudentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

  goToDetail(id: string): void {
    this.router.navigate([id, 'detail'], {
      relativeTo: this.activatedRoute})
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
              this.isLoading = true;
              this.studentsService.addStudent(result).subscribe({
                next: (student) => {
                  this.dataSource = student;
                },
                complete: () => {
                  this.isLoading = false;
                },
              });
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
