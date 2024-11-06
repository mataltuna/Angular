import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../../shared/utils';
import { Lesson } from '../models';
import { CoursesService } from '../../../../core/services/courses.service';
import { Course } from '../../courses/models';
import { Observable } from 'rxjs';

interface LessonDialogData {
  editingLesson?: Lesson;
}

@Component({
  selector: 'app-lessons-dialog',
  templateUrl: './lessons-dialog.component.html',
  styles: `
    #lesson-form {
        padding: 4px 0;
    }
  `
})
export class LessonDialogComponent {
  lessonForm: FormGroup;
  courses$: Observable<Course[]>

  constructor (
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<LessonDialogComponent>,
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) public data?: LessonDialogData,
  ) {
    this.lessonForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      orgCourse: ['', [Validators.required]],
      daysLesson: ['', [Validators.required, this.maxOptionsValidator(3)]],
      timeLesson: ['', [Validators.required]]
    })
    this.courses$ = this.coursesService.getCourses()
    this.patchFormValue()
  }
  
  private get isEditing() {
    return !!this.data?.editingLesson;
  }

  patchFormValue() {
    if(this.data?.editingLesson){
      this.lessonForm.patchValue(this.data.editingLesson)
    }
  }

  onAdd(): void {
    if (this.lessonForm.invalid) {
      this.lessonForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.lessonForm.value,
        id: this.isEditing
          ? this.data!.editingLesson!.id 
          : generateRandomString(4),
        createdAt: this.isEditing
          ? this.data!.editingLesson!.createdAt
          : new Date(),
      });
    }
  }

  maxOptionsValidator(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedOptions = control.value;
      const optionsCount = Array.isArray(selectedOptions) ? selectedOptions.length : 1;
      if (optionsCount > max) {
        return { maxOptionsExceeded: { max } };
      }
      return null;
    };
  }
}
