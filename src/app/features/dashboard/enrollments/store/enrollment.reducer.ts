import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Course, Enrollment, Student } from '../../../../shared/models';
import { generateRandomString } from '../../../../shared/utils';

export const enrollmentFeatureKey = 'enrollment';

const ENROLLMENTS_DB: Enrollment[] = [
  {
    id: 'dfd475',
    studId: 'df6e',
    courseId: 'fs6w'
  }
]

const COURSES_DB: Course[] = [
  {
    id: 'de98',
    name: 'Programación Frontend',
    createdAt: new Date,
    maxStud: 50
  },
  {
    id: '4hr6',
    name: 'Programación Backend',
    createdAt: new Date,
    maxStud: 60
  }
]

const STUDENT_DB: Student[] = [
  {
    id: "8768",
    firstName: "Juan",
    lastName: "Perez",
    email: "juanPe@gmail.com",
    courses: [
      "Programación Frontend"
    ],
    token: "fBm6bSLfS4wmefQ2V323"
  },
  {
    id: "d4a4",
    firstName: "Pedro",
    lastName: "Sanchez",
    email: "sanchPedri@gmail.com",
    courses: [
      "Ciberseguridad"
    ],
    token: "fhV7PRkq15WE6Wph7Tfj"
  }
]

export interface State {
  enrollments: Enrollment[]
  coursesOpts: Course[]
  studOpts: Student[]
}

export const initialState: State = {
  enrollments: [],
  coursesOpts: [],
  studOpts: []
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, (state) => {
    return {
      ...state,
      enrollments: [...ENROLLMENTS_DB]
    }
  }),
  on(EnrollmentActions.loadCoursesOptions, (state) => {
    return {
      ...state,
      coursesOpts: [...COURSES_DB]
    }
  }),
  on(EnrollmentActions.loadStudentsOptions, (state) => {
    return {
      ...state,
      studOpts: [...STUDENT_DB]
    }
  }),
  on(EnrollmentActions.createEnrollment, (state, action) => {
    return {
      ...state,
      enrollments: [
        ...state.enrollments, 
        {
          id: generateRandomString(4),
          courseId: action.courseId,
          studId: action.studId 
        },
      ],
    }
  })
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

