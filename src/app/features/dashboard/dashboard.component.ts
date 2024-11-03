import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Student } from '../../shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  isSidenavOpened = true;
  authUser$: Observable<Student | null>

  constructor(private router: Router,private authService: AuthService){
    this.authUser$ = this.authService.authUser$
  }
}
