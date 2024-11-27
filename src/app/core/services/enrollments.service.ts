import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { concatMap, Observable } from "rxjs";
import { Enrollment } from "../../shared/models";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root'})

export class EnrollmentsService {
    private baseURL = environment.apiBaseURL

    constructor(private httpClient: HttpClient) {}

    getEnrollments(): Observable<Enrollment[]> {
        return this.httpClient.get<Enrollment[]>(
            `${this.baseURL}/enrollments?_embed=course&_embed=student`
        )
    }
    
    createEnroll(payload: Omit<Enrollment, 'id' | 'stud' | 'cours'>): Observable<Enrollment> {
        return this.httpClient.post<Enrollment>(
            `${this.baseURL}/enrollments`,
            payload
        )
    }

    removeEnrollById(id: string): Observable<Enrollment[]> {
        return this.httpClient
        .delete<Enrollment>(`${this.baseURL}/enrollments/${id}`)
        .pipe(concatMap(() => this.getEnrollments()))
    }

    updateEnrollById(id: string, update: Partial<Enrollment>) {
        return this.httpClient
        .patch<Enrollment>(`${this.baseURL}/enrollments/${id}`, update)
        .pipe(concatMap(() => this.getEnrollments()))
    }
}
