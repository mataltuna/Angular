import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course, Enrollment, Student } from '../../../../shared/models';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[]}>(),
    'Load Enrollments Failure': props<{ error: Error}>(),

    'Load Courses And Students Options': emptyProps(),
    'Load Courses And Students Options Success': props<{ students: Student[], courses: Course[] }>(),
    'Load Courses And Students Options Failure': props<{ error: Error }>(),

    'Create Enrollment': props<{ courseId: string; studId: string }>(),
    'Create Enrollment Success': props<{ data: Enrollment }>(),
    'Create Enrollment Failure': props<{ error: Error }>(),

    'Update Enrollment': props<{ id: string; update: Partial<Enrollment> }>(),
    'Update Enrollment Success': props<{ data: Enrollment[] }>(),
    'Update Enrollment Failure': props<{ error: Error }>(),

    'Delete Enrollment': props<{ id: string }>(),
    'Delete Enrollment Success': props<{ data: Enrollment[] }>(),
    'Delete Enrollment Failure': props<{ error: Error }>()
  }
});
