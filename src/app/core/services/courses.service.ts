import { Injectable } from "@angular/core";
import { Observable, of, delay } from "rxjs";
import { Course } from "../../features/dashboard/courses/models";
import { generateRandomString } from "../../shared/utils";

let COURSES_DB: Course[] = [
    {
        id:generateRandomString(4),
        name: 'Programación Frontend',
        createdAt: new Date(),
        maxAlumn: 50
    },
    {
        id:generateRandomString(4),
        name: 'Programación Backend',
        createdAt: new Date(),
        maxAlumn: 52
    },
    {
        id:generateRandomString(4),
        name: 'Diseño UX UI',
        createdAt: new Date(),
        maxAlumn: 45
    },
    {
        id:generateRandomString(4),
        name: 'Marketing',
        createdAt: new Date(),
        maxAlumn: 64
    },
    {
        id:generateRandomString(4),
        name: 'Ciberseguridad',
        createdAt: new Date(),
        maxAlumn: 68
    }
]

@Injectable({ providedIn: 'root' })

export class CoursesService {

    getCourses(): Observable<Course[]> {
        return of([...COURSES_DB])
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