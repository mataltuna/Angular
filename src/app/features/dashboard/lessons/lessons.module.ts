import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { LessonDialogComponent } from './lesson-dialog/lessons-dialog.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    LessonsComponent,
    LessonDialogComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    SharedModule
  ]
})
export class LessonsModule { }
