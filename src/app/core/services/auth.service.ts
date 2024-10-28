import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { AuthData } from "../../features/auth/models";
import { generateRandomString } from "../../shared/utils";
import { Student } from "../../shared/models";

const ADM_USER: Student = {
    email: 'admin@gmail.com',
    firstName: 'Admin',
    lastName: 'Admin',
    password: 'admin1405',
    id: generateRandomString(4),
    courses: []
}

@Injectable({providedIn:'root'})

export class AuthService {
    login(data: AuthData): Observable<Student> {
        if (data.email != ADM_USER.email || data.password != ADM_USER.password) {
            return throwError(() => new Error('Los datos son invalidos'))
        }
        return of(ADM_USER)
    }
}
