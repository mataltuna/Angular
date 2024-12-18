import { Injectable } from "@angular/core";
import { Observable, concatMap } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Course } from "../../shared/models";

@Injectable({ providedIn: 'root' })

export class CoursesService {
    private baseURL = environment.apiBaseURL

    constructor(private httpsClient: HttpClient) {}

    getCourses(): Observable<Course[]> {
        return this.httpsClient.get<Course[]>(`${this.baseURL}/courses`)
    }

    removeCourById(id: string): Observable<Course[]> {
        return this.httpsClient
        .delete<Course>(`${this.baseURL}/courses/${id}`)
        .pipe(concatMap(() => this.getCourses()))
    }

    createCourse(data: Omit<Course, 'id'>): Observable<Course> {
        return this.httpsClient.post<Course>(`${this.baseURL}/courses`, {
            ...data
        })
    }

    updateCourById(id: string, update: Partial<Course>) {
        return this.httpsClient
        .patch<Course>(`${this.baseURL}/courses/${id}`, update)
        .pipe(concatMap(() => this.getCourses()))
    }
}