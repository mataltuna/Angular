import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../shared/models';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { generateRandomString } from '../../../shared/utils';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private baseURL = environment.apiBaseURL
  passwdInpType: 'password' | 'text' = 'password'
  registerForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpsClient: HttpClient
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    })
  }

  togglePasswdInpType(): void {
    if (this.passwdInpType === 'password'){
      this.passwdInpType = 'text'
    } else {
      this.passwdInpType = 'password'
    }
  }

  createUser(data: Omit<User, 'id' | 'token'>): Observable<User> {

    return this.httpsClient.post<User>(`${this.baseURL}/users`, {
        ...data,
        token: generateRandomString(20)
    })
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    } else {
      this.isLoading = true
      let newUser: Omit<User, 'id'> = {
        ...this.registerForm.value,
      };
      this.createUser(newUser).subscribe({
        next: () => {
          this.router.navigate(['auth', 'login'])
        },
        error: (err) => {
          alert(err)
        }
      })
    }
  }
  
}
