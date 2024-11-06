import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { Course } from './models';
import { CoursesDialogComponent } from './courses-dialog/courses-dialog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  dataSource: Course[] = []
  displayedColumns = ['id', 'name', 'maxStud', 'createdAt', 'actions']
  isLoading = false

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCourses()
  }

  loadCourses(): void {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.dataSource = courses
      },
      error: () => {
        this.isLoading = false
      },
      complete: () => {
        this.isLoading = false
      }
    })
  }

  async onDelete(id: string) {
    const swalResult = await this.showConfirmationDialog("eliminar el alumno");
    if(swalResult.isConfirmed) {
      this.isLoading = true;
      this.coursesService.removeCourById(id).subscribe({
        next: (course) => {
          this.dataSource = course;
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
  openModal(editingCourse?: Course): void {
    this.matDialog
      .open(CoursesDialogComponent, {
        data: {
          editingCourse
        }
      })
      .afterClosed()
      .subscribe({
        next: async (result) => {
          if(!!result) {
            if(editingCourse) {
              const swalResult = await this.showConfirmationDialog("guardar los cambios");
              if(swalResult.isConfirmed) {
                this.handleUpdate(editingCourse.id, result);
              }
            } else {
              this.isLoading = true;
              this.coursesService
              .createCourse(result)
              .subscribe({next: () => this.loadCourses()})
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

  handleUpdate(id: string, update: Course): void {
    this.isLoading = true;
    this.coursesService.updateCourById(id, update).subscribe({
      next: (course) => {
        this.dataSource = course;
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
