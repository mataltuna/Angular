import { TestBed } from "@angular/core/testing"
import { AuthService } from "./auth.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthData, User } from "../../shared/models";
import { MockProvider } from 'ng-mocks';
import { NavigationExtras, Router } from '@angular/router';

const mockUser: User = {
    firstName: 'Admin',
    lastName: 'Admin',
    id: 'De57',
    email: 'example@gmail.com',
    password: '987654',
    role: 'USER',
    token: '2d9eP6ed5784nBI44bjB'
}
const mockAuthData: AuthData = {
    email: 'example@gmail.com',
    password: '987654'
}

describe('AuthService', () => {
    let service: AuthService
    let httpControler: HttpTestingController
    let router: Router

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule
            ],
            providers: [
                AuthService,
                MockProvider(Router, {
                    navigate: (commands: any[], extras?: NavigationExtras) => {
                        return new Promise((res) => res(true));
                    }
                })
            ]
        })
        httpControler = TestBed.inject(HttpTestingController)
        service = TestBed.inject(AuthService)
        router = TestBed.inject(Router);
        localStorage.clear();
    })

    it('El servicio debe ser definido', () => {
        expect(service).toBeTruthy()
    })

    it('Debe realizarse el login y debe establecer el token en localstorage', (done) => {
        service.login(mockAuthData).subscribe({
            next: (stud) => {
                expect(stud).toEqual(mockUser);
                expect(localStorage.getItem('token')).toEqual(mockUser.token);
                done()
            }
        })

        const mockReq = httpControler.expectOne({
            url: `${service['baseURL']}/users?email=${mockAuthData.email}&password=${mockAuthData.password}`,
            method: 'GET'
        })
        mockReq.flush([mockUser])
    })

    it('Debe retornar un error al realizar un login invalido', (done) => {
        service.login(mockAuthData).subscribe({
            error: (err) => {
                expect(err).toBeInstanceOf(Error)
                expect(err['message']).toBe('Los datos son invalidos')
                done()
            }
        })

        const mockReq = httpControler.expectOne({
            url: `${service['baseURL']}/users?email=${mockAuthData.email}&password=${mockAuthData.password}`,
            method: 'GET'
        })
        mockReq.flush([], {status: 401, statusText: 'Unauthorized'})
    })

    /*it('Logout debe remover el token de Localstorage', (done) => {
        service.login(mockAuthData).subscribe()
        const mockReq = httpControler.expectOne({
            url: `${service['baseURL']}/users?email=${mockAuthData.email}&password=${mockAuthData.password}`,
            method: 'GET'
        })
        mockReq.flush([mockStudent])

        service.logout()
        expect(localStorage.getItem('token')).toBeNull()
    }) 
    
    it('Logout debe desestablcer al usuario autenticado', (done) => {
        service.login(mockAuthData).subscribe()
        const mockReq = httpControler.expectOne({
            url: `${service['baseURL']}/users?email=${mockAuthData.email}&password=${mockAuthData.password}`,
            method: 'GET'
        })
        mockReq.flush([mockStudent])

        service.logout()
        service.authUser$.subscribe({
            next: (user) => {
                expect(user).toBeNull()
                done()
            }
        })
    })

    it('Logout debe redirigir a /auth.login', () => {
        const spyOnNavigate = spyOn(router, 'navigate')

        service.login(mockAuthData).subscribe()
        const mockReq = httpControler.expectOne({
            url: `${service['baseURL']}/users?email=${mockAuthData.email}&password=${mockAuthData.password}`,
            method: 'GET'
        })
        mockReq.flush([mockStudent])

        service.logout()

        expect(spyOnNavigate).toHaveBeenCalledOnceWith(['auth', 'login'])
    })*/
})
