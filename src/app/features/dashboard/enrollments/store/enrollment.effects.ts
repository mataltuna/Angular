import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { EnrollmentsService } from '../../../../core/services/enrollments.service';
import { Action } from '@ngrx/store';
import { StudentsService } from '../../../../core/services/students.service';
import { CoursesService } from '../../../../core/services/courses.service';

@Injectable()
export class EnrollmentEffects {
  loadEnrollments$: Actions<Action<string>>; 
  createEnroll$: Actions<Action<string>>; 
  createEnrollSuccess$: Actions<Action<string>>;
  loadCoursAndStudsOpts$: Actions<Action<string>>
  updateEnrollment$: Actions<Action<string>>
  deleteEnrollment$: Actions<Action<string>>

  constructor(
    private actions$: Actions,
    private enrollmentsService: EnrollmentsService,
    private studsService: StudentsService,
    private coursService: CoursesService
  ) {
    this.loadEnrollments$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(EnrollmentActions.loadEnrollments),
        concatMap(() => 
          this.enrollmentsService.getEnrollments().pipe(
              map((response) => EnrollmentActions.loadEnrollmentsSuccess({data: response})),
              catchError((error) => of(EnrollmentActions.loadEnrollmentsFailure({error})))
            )
        )
      );
    });

    this.createEnroll$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(EnrollmentActions.createEnrollment),
        concatMap((action) => 
          this.enrollmentsService
            .createEnroll({
              courseId: action.courseId,
              studentId: action.studId
            })
            .pipe(
              map((data) => EnrollmentActions.createEnrollmentSuccess({ data })),
              catchError((error) => 
                of(EnrollmentActions.createEnrollmentFailure({ error }))
              )
            )
        )
      );
    });

    this.createEnrollSuccess$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(EnrollmentActions.createEnrollmentSuccess),
        map(() => EnrollmentActions.loadEnrollments())
      )
    });

    this.loadCoursAndStudsOpts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(EnrollmentActions.loadCoursesAndStudentsOptions),
        concatMap(() => 
          forkJoin([
            this.coursService.getCourses(),
            this.studsService.getStudents()
          ]).pipe(
            map((res) => 
              EnrollmentActions.loadCoursesAndStudentsOptionsSuccess({
                courses: res[0],
                students: res[1]
              })
            ),
            catchError((error) => 
              of(EnrollmentActions.loadCoursesAndStudentsOptionsFailure({ error }))
            )
          )
        )
      )
    })
    
    this.updateEnrollment$ = createEffect(() =>
      this.actions$.pipe(
        ofType(EnrollmentActions.updateEnrollment),
        concatMap(({ id, update }) =>
          this.enrollmentsService.updateEnrollById(id, update).pipe(
            map((data) => EnrollmentActions.updateEnrollmentSuccess({ data })),
            catchError((error) => of(EnrollmentActions.updateEnrollmentFailure({ error })))
          )
        )
      )
    );

    this.deleteEnrollment$ = createEffect(() =>
      this.actions$.pipe(
        ofType(EnrollmentActions.deleteEnrollment),
        concatMap(({ id }) =>
          this.enrollmentsService.removeEnrollById(id).pipe(
            map((data) => EnrollmentActions.deleteEnrollmentSuccess({ data })),
            catchError((error) => of(EnrollmentActions.deleteEnrollmentFailure({ error })))
          )
        )
      )
    );
  }
}
