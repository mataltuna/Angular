import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollment from './enrollment.reducer';

export const selectEnrollmentState = createFeatureSelector<fromEnrollment.State>(
  fromEnrollment.enrollmentFeatureKey
);


export const selectEnrollments = createSelector(
  selectEnrollmentState,
  (state) => state.enrollments
)

export const selectCoursesOptions = createSelector(
  selectEnrollmentState,
  (state) => state.coursesOpts
)

export const selectStudentsOptions = createSelector(
  selectEnrollmentState,
  (state) => state.studOpts
)