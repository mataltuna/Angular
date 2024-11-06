import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LessonDialogComponent } from './lesson-dialog/lessons-dialog.component';
import { LessonService } from '../../../core/services/lesson.service';
import { Lesson } from './models/index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent implements OnInit {
  dataSource: Lesson[] = []
  displayedColumns = ['id', 'name', 'createdAt', 'orgCourse', 'daysLesson', 'timeLesson', 'actions']
  isLoading = false

  constructor(
    private lessonService: LessonService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadLessons()
  }

  loadLessons(): void {
    this.isLoading = true;
    this.lessonService.getLessons().subscribe({
      next: (lesson) => {
        this.dataSource = lesson
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
      this.lessonService.removeLessonById(id).subscribe({
        next: (lesson) => {
          this.dataSource = lesson;
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
  openModal(editingLesson?: Lesson): void {
    this.matDialog
      .open(LessonDialogComponent, {
        data: {
          editingLesson
        }
      })
      .afterClosed()
      .subscribe({
        next: async (result) => {
          if(!!result) {
            if(editingLesson) {
              const swalResult = await this.showConfirmationDialog("guardar los cambios");
              if(swalResult.isConfirmed) {
                this.handleUpdate(editingLesson.id, result);
              }
            } else {
              this.isLoading = true;
              this.lessonService
              .createLesson(result)
              .subscribe({next: () => this.loadLessons()})
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

  handleUpdate(id: string, update: Lesson): void {
    this.isLoading = true;
    this.lessonService.updateLessonById(id, update).subscribe({
      next: (lesson) => {
        this.dataSource = lesson;
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
