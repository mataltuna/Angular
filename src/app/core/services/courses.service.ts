import { Injectable } from "@angular/core";
import { Observable, of, delay, BehaviorSubject } from "rxjs";
import { Course } from "../../features/dashboard/courses/models";
import { generateRandomString } from "../../shared/utils";

let COURSES_DB: Course[] = [
    {
        id:generateRandomString(4),
        name: 'Programación Frontend',
        createdAt: new Date(),
        maxStud: 50
    },
    {
        id:generateRandomString(4),
        name: 'Programación Backend',
        createdAt: new Date(),
        maxStud: 52
    },
    {
        id:generateRandomString(4),
        name: 'Diseño UX UI',
        createdAt: new Date(),
        maxStud: 45
    },
    {
        id:generateRandomString(4),
        name: 'Marketing',
        createdAt: new Date(),
        maxStud: 64
    },
    {
        id:generateRandomString(4),
        name: 'Ciberseguridad',
        createdAt: new Date(),
        maxStud: 68
    }
]

@Injectable({ providedIn: 'root' })

export class CoursesService {
    private coursesSubject = new BehaviorSubject<Course[]>([...COURSES_DB]);
    courses$ = this.coursesSubject.asObservable();

    getCourses(): Observable<Course[]> {
        return this.courses$
    }

    addCourse(newCourse: Course): Observable<Course[]> {
        COURSES_DB.push(newCourse);
        return of(COURSES_DB).pipe(delay(1000));
    }

    removeCourById(id: string): Observable<Course[]> {
        COURSES_DB = COURSES_DB.filter((course) => course.id != id);
        return of(COURSES_DB).pipe(delay(1000));
    }

    updateCourById(id: string, update: Partial<Course>): Observable<Course[]> {
        COURSES_DB = COURSES_DB.map((course) =>
            course.id === id ? { ...course, ...update } : course
        );
        return of(COURSES_DB).pipe(delay(1000));
    }
}