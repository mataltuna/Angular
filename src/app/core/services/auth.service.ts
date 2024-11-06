import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, throwError } from "rxjs";
import { AuthData } from "../../features/auth/models";
import { Student } from '../../shared/models/index';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({providedIn:'root'})
export class AuthService {

    private _authUser$ = new BehaviorSubject<null | Student>(null);
    
    public authUser$ = this._authUser$.asObservable();
    
    private baseURL = environment.apiBaseURL

    constructor(
        private router:Router,
        private httpClient:HttpClient
    ){}

    private handleAuthentication(users: Student[]): Student | null {
        if(!!users[0]) {
            this._authUser$.next(users[0])
            localStorage.setItem('token', users[0].token)
            return users[0]
        } else {
            return null
        }
    }

    login(data: AuthData): Observable<Student> {
        return this.httpClient.get<Student[]>(`${this.baseURL}/users?email=${data.email}&password=${data.password}`)
            .pipe(map((users) => {
                const user = this.handleAuthentication(users)
                if(user) {
                    return user;
                } else {
                    throw throwError(() => new Error('Los datos son invalidos'))
                }
            }))
    }

    logout() {
        this._authUser$.next(null)
        localStorage.removeItem('token')
        this.router.navigate(['auth','login'])
    }

    verifyTok(): Observable<boolean> {
        return this.httpClient
        .get<Student[]>(`${this.baseURL}/users?token=${localStorage.getItem('token')}`
        )
        .pipe(
            map((users) => {
            const user = this.handleAuthentication(users)
            return !!user
        }))
    }
}
