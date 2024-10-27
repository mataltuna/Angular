import { DebugElement, Injectable } from '@angular/core';
import { Student } from '../../features/dashboard/users/models';
import { delay, Observable, of } from 'rxjs';

let DATABASE: Student[] = [];

@Injectable({
  providedIn: 'root',
})

export class StudentsService {
  constructor() {}

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
}