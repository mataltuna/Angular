import { Injectable } from '@angular/core';
import { Student } from '../../shared/models';
import { delay, map, Observable, of } from 'rxjs';

let DATABASE: Student[] = [];

@Injectable({
  providedIn: 'root',
})

export class StudentsService {
  constructor() {}

  getById(id: string): Observable<Student | undefined> {
    return this.getStudents().pipe(map((users) => users.find((s) => s.id === id)))
  }

  getStudents(): Observable<Student[]> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }, 3000);
    });
  }

  removeStudById(id: string): Observable<Student[]> {
    DATABASE = DATABASE.filter((student) => student.id != id);
    return of(DATABASE).pipe(delay(1000));
  }

  updateStudById(id: string, update: Partial<Student>) {
    debugger
    DATABASE = DATABASE.map((student) =>
      student.id === id ? { ...student, ...update } : student
    );
    return of(DATABASE).pipe(delay(1000));
  }

  addStudent(newStud: Student): Observable<Student[]> {
    DATABASE.push(newStud);
    return of(DATABASE).pipe(delay(1000));
  }
}