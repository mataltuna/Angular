import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable} from "rxjs";
import { AuthData, User } from '../../shared/models/index';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({providedIn:'root'})
export class AuthService {

    private _authUser$ = new BehaviorSubject<null | User>(null);
    public authUser$ = this._authUser$.asObservable();
    private baseURL = environment.apiBaseURL

    constructor(
        private router:Router,
        private httpClient:HttpClient
    ){}

    private handleAuthentication(users: User[]): User | null {
        if(!!users[0]) {
            this._authUser$.next(users[0])
            localStorage.setItem('token', users[0].token)
            return users[0]
        } else {
            return null
        }
    }

    login(data: AuthData): Observable<User> {
        return this.httpClient.get<User[]>(`${this.baseURL}/users?email=${data.email}&password=${data.password}`)
            .pipe(map((users) => {
                const user = this.handleAuthentication(users)
                if(user) {
                    return user;
                } else {
                    throw new Error('Los datos son invalidos')
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
        .get<User[]>(`${this.baseURL}/users?token=${localStorage.getItem('token')}`
        )
        .pipe(
            map((users) => {
            const user = this.handleAuthentication(users)
            return !!user
        }))
    }
}
