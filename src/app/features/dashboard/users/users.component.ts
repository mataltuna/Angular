import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { StudentsService } from '../../../core/services/students.service';
import { Student } from '../../../shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'courses', 'actions'];
  dataSource: Student[] = [];
  isLoading = false;
  isAdmin: boolean = false;
  user: string | null = null;
  authService!: AuthService;

  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadStuds();
    /*this.authService.authUser$.subscribe((user) => {
      this.user = user?.role || null;  // Asume que el `User` tiene una propiedad `role`
    });*/
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

  async onDelete(id: string) {
    const swalResult = await this.showConfirmationDialog("eliminar el alumno");
    if(swalResult.isConfirmed) {
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
        next: async (result) => {
          if(!!result) {
            if(editingStudent) {
              const swalResult = await this.showConfirmationDialog("guardar los cambios");
              if(swalResult.isConfirmed) {
                this.handleUpdate(editingStudent.id, result);
              }
            } else {
              this.isLoading = true;
              this.studentsService
              .createStudent(result)
              .subscribe({next: () => this.loadStuds()})
            }
          }
        }
      })
  }

  async showConfirmationDialog(obj:string) {
    return await Swal.fire({
      title: `¿Quieres ${obj}?`,
      showDenyButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`
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
