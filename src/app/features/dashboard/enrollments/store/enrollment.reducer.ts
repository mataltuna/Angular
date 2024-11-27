import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Course, Enrollment, Student } from '../../../../shared/models';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoadingEnroll: boolean
  loadEnrollError: Error | null
  enrollments: Enrollment[]
  coursesOpts: Course[]
  studOpts: Student[]
}

export const initialState: State = {
  isLoadingEnroll: false,
  loadEnrollError: null,
  enrollments: [],
  coursesOpts: [],
  studOpts: []
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, (state) => {
    return {
      ...state,
      isLoadingEnroll: true
    }
  }),
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, action) => {
    return {
      ...state,
      enrollments: action.data,
      loadEnrollError: null,
      isLoadingEnroll: false
    }
  }),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, action) => {
    return {
      ...state,
      ...initialState,
      loadEnrollError: action.error
    }
  }),
  on(EnrollmentActions.loadCoursesAndStudentsOptions, (state) => {
    return {
      ...state,
      isLoadingEnroll: true,
    }
  }),
  on(EnrollmentActions.loadCoursesAndStudentsOptionsSuccess, (state, action) => {
    return {
      ...state,
      loadEnrollError: null,
      isLoadingEnroll: false,
      coursesOpts: action.courses,
      studOpts: action.students
    }
  }),
  on(EnrollmentActions.loadCoursesAndStudentsOptionsFailure, (state, {error}) => {
    return {
      ...state,
      loadEnrollError: error,
      isLoadingEnroll: false,
    }
  }),

  on(EnrollmentActions.updateEnrollment, (state) => {
    return {
      ...state,
      isLoadingEnroll: true
    }
    
  }),
  on(EnrollmentActions.updateEnrollmentSuccess, (state, { data }) => {
    return {
      ...state,
      enrollments: data,
      isLoadingEnroll: false
    }
  }),
  on(EnrollmentActions.updateEnrollmentFailure, (state, { error }) => {
    return {
      ...state,
      loadEnrollError: error,
      isLoadingEnroll: false
    }
  }),

  on(EnrollmentActions.deleteEnrollment, (state) => {
    return {
      ...state,
      isLoadingEnroll: true
    }
    
  }),
  on(EnrollmentActions.deleteEnrollmentSuccess, (state, { data }) => {
    return {
      ...state,
      enrollments: data,
      isLoadingEnroll: false
    }
  }),
  on(EnrollmentActions.deleteEnrollmentFailure, (state, { error }) => {
    return {
      ...state,
      loadEnrollError: error,
      isLoadingEnroll: false
    }
    
  })
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

