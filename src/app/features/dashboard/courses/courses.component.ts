import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { Course } from './models';
import { CoursesDialogComponent } from './courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  courses: Course[] = []
  dataSource: Course[] = []
  displayedColumns = ['id', 'name', 'maxAlumn', 'createdAt', 'actions']
  isLoading = false

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCourses()
  }

  loadCourses(): void {
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses
      }
    })
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
        next: (result) => {
          if(!!result) {
            if(editingCourse) {
              this.handleUpdate(editingCourse.id, result);
            } else {
              this.isLoading = true;
              this.coursesService.addCourse(result).subscribe({
                next: (course) => {
                  this.dataSource = course;
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
