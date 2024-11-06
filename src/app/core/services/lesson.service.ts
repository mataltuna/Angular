import { Injectable } from "@angular/core";
import { Observable, of, delay, concatMap } from "rxjs";
import { Lesson } from '../../features/dashboard/lessons/models/index';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

let CLASSES_DB: Lesson[] = []

@Injectable({ providedIn: 'root' })

export class LessonService {
    private baseURL = environment.apiBaseURL

    constructor(private httpsClient: HttpClient) {}

    getLessons(): Observable<Lesson[]> {
        return this.httpsClient.get<Lesson[]>(`${this.baseURL}/lessons`)
    }

    removeLessonById(id: string): Observable<Lesson[]> {
        return this.httpsClient
        .delete<Lesson>(`${this.baseURL}/lessons/${id}`)
        .pipe(concatMap(() => this.getLessons()))
    }

    createLesson(data: Omit<Lesson, 'id'>): Observable<Lesson> {
        return this.httpsClient.post<Lesson>(`${this.baseURL}/lessons`, {
            ...data
        })
    }

    updateLessonById(id: string, update: Partial<Lesson>): Observable<Lesson[]> {
        return this.httpsClient
        .patch<Lesson>(`${this.baseURL}/lessons/${id}`, update)
        .pipe(concatMap(() => this.getLessons()))
    }
}