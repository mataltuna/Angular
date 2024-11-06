import { ComponentFixture, TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { HttpClientTestingModule, provideHttpClientTesting } from "@angular/common/http/testing"
import { SharedModule } from "../../../shared/shared.module"
import { MockProvider } from 'ng-mocks'
import { AuthService } from "../../../core/services/auth.service"
import { of } from "rxjs"


describe("LoginComponent", () => {
    let component: LoginComponent
    let fixture: ComponentFixture<LoginComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, SharedModule],
            providers: [
                provideHttpClientTesting(),
                MockProvider(AuthService, {
                    login() {
                        return of()
                    }
                })
            ]
        }).compileComponents()
        fixture = TestBed.createComponent(LoginComponent)
        component = fixture.componentInstance
    })

    it("El componente debe haber sido instanciado", () => {
        expect(component).toBeTruthy()
    })

    it('El email debe ser requerido', () => {
        const emailControl = component.loginForm.get('email');
        emailControl?.setValue('')
        expect(emailControl?.hasError('required')).toBeTrue()
    })

    // it('El email debe tener un formato de email', () => {
    //     const emailControl = component.loginForm.get('email');
    //     emailControl?.setValue('')
    //     expect(emailControl?.hasError('email')).toBeTrue()
    // })

    it('Al llamar onSubmit, si el form es invalido, debe marcar los campos como touched', () => {
        component.loginForm.setValue({
            email: '',
            password: ''
        })

        const spyOnMarkAllAsTouched = spyOn(component.loginForm, 'markAllAsTouched')

        component.onSubmit()

        expect(spyOnMarkAllAsTouched).toHaveBeenCalledTimes(1)
    })

    it('Al llamar onSubmit debe llamar a login de AuthService', () => {
        component.loginForm.setValue({
            email: 'example@gmail.com',
            password: '123456'
        })

        const spyOnLogin = spyOn(component, 'doLogin')
        component.onSubmit()

        expect(spyOnLogin).toHaveBeenCalled()
    })

    it('El toogle de input type del campo password debe alternar entre password y text', () => {
        component.passwdInpType = 'password'
        component.togglePasswdInpType()

        expect(component.passwdInpType).toBe('text')

        component.passwdInpType = 'text'
        component.togglePasswdInpType()
        
        expect(component.passwdInpType).toBe('password')
    })
})