import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { AuthData } from "../../features/auth/models";
import { generateRandomString } from "../../shared/utils";
import { Student } from '../../shared/models/index';
import { Router } from '@angular/router';
import { THREE } from "@angular/cdk/keycodes";

const ADM_USER: Student = {
    email: 'admin@gmail.com',
    firstName: 'Admin',
    lastName: 'Admin',
    password: 'admin1405',
    id: generateRandomString(4),
    token: 'iNidJDfL9nEnhIz49E0o',
    courses: []
}

@Injectable({providedIn:'root'})
export class AuthService {

    private _authUser$ = new BehaviorSubject<null | Student>(null);
    public authUser$ = this._authUser$.asObservable();

    constructor(private router:Router){}

    login(data: AuthData): Observable<Student> {
        if (data.email != ADM_USER.email || data.password != ADM_USER.password) {
            return throwError(() => new Error('Los datos son invalidos'))
        }
        this._authUser$.next(ADM_USER)

        localStorage.setItem('token', ADM_USER.token)

        return of(ADM_USER)
    }

    logout() {
        this._authUser$.next(null)
        localStorage.removeItem('token')
        this.router.navigate(['auth','login'])
    }

    verifyTok(): Observable<boolean> {
        const isValid = localStorage.getItem('token') === ADM_USER.token;
        if (isValid) {
            this._authUser$.next(ADM_USER)
        } else {
            this._authUser$.next(null)
        }
        return of(isValid)
    }
}
