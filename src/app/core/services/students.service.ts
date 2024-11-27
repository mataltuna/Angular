import { Injectable } from '@angular/core';
import { Student } from '../../shared/models';
import { concatMap, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class StudentsService {
  private baseURL = environment.apiBaseURL

  constructor(private httpClient: HttpClient) {}

  getById(id: string): Observable<Student | undefined> {
    return this.httpClient.get<Student>(`${this.baseURL}/students/${id}`)
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}/students`)
  }

  removeStudById(id: string): Observable<Student[]> {
    return this.httpClient
    .delete<Student>(`${this.baseURL}/students/${id}`)
    .pipe(concatMap(() => this.getStudents()))
  }

  createStudent(data: Omit<Student, 'id'>): Observable<Student> {
    return this.httpClient.post<Student>(`${this.baseURL}/students`, {
      ...data
    })
  }

  updateStudById(id: string, update: Partial<Student>) {
    return this.httpClient
    .patch<Student>(`${this.baseURL}/students/${id}`, update)
    .pipe(concatMap(() => this.getStudents()))
  }

  addCourseToStudent(studId: string, courseId: string): Observable<Student> {
    return this.httpClient.patch<Student>(`${this.baseURL}/students/${studId}`, {
        enrolls: courseId 
      });
  }
  
}