import { Injectable } from "@angular/core";
import { Observable, of, delay } from "rxjs";
import { Lesson } from '../../features/dashboard/lessons/models/index';

let CLASSES_DB: Lesson[] = []

@Injectable({ providedIn: 'root' })

export class LessonService {

    getLessons(): Observable<Lesson[]> {
        return of([...CLASSES_DB])
    }

    addLesson(newLesson: Lesson): Observable<Lesson[]> {
        CLASSES_DB.push(newLesson);
        return of(CLASSES_DB).pipe(delay(1000));
    }

    removeLessonById(id: string): Observable<Lesson[]> {
        CLASSES_DB = CLASSES_DB.filter((lesson) => lesson.id != id);
        return of(CLASSES_DB).pipe(delay(1000));
    }

    updateLessonById(id: string, update: Partial<Lesson>): Observable<Lesson[]> {
        CLASSES_DB = CLASSES_DB.map((lesson) =>
            lesson.id === id ? { ...lesson, ...update } : lesson
        );
        return of(CLASSES_DB).pipe(delay(1000));
    }
}