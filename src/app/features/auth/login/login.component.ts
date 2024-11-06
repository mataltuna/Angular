import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  passwdInpType: 'password' | 'text' = 'password'
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  togglePasswdInpType(): void {
    if (this.passwdInpType === 'password'){
      this.passwdInpType = 'text'
    } else {
      this.passwdInpType = 'password'
    }
  }

  doLogin() {
    this.authService.login(this.loginForm.value).subscribe({
        next: (result) => {
          this.router.navigate(['dashboard', 'home'])
        },
        error: (err) => {
          if(err instanceof Error) {
            this.showError(err.message)
          }
        }
    })
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
    } else {
      this.doLogin()
    }
  }

  async showError(ErrMsg:string) {
    return await Swal.fire({
      icon: "error",
      title: "Ups...",
      text: ErrMsg,
    });
  }
}
