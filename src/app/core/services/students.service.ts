import { Injectable } from '@angular/core';
import { Student } from '../../shared/models';
import { concatMap, delay, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class StudentsService {
  private baseURL = environment.apiBaseURL

  constructor(private httpsClient: HttpClient) {}

  getById(id: string): Observable<Student | undefined> {
    return this.httpsClient.get<Student>(`${this.baseURL}/users/${id}`)
  }

  getStudents(): Observable<Student[]> {
    return this.httpsClient.get<Student[]>(`${this.baseURL}/users?role=USER`)
  }

  removeStudById(id: string): Observable<Student[]> {
    return this.httpsClient
    .delete<Student>(`${this.baseURL}/users/${id}`)
    .pipe(concatMap(() => this.getStudents()))
  }

  createStudent(data: Omit<Student, 'id'>): Observable<Student> {
    return this.httpsClient.post<Student>(`${this.baseURL}/users`, {
      ...data
    })
  }

  updateStudById(id: string, update: Partial<Student>) {
    return this.httpsClient
    .patch<Student>(`${this.baseURL}/users/${id}`, update)
    .pipe(concatMap(() => this.getStudents()))
  }
}