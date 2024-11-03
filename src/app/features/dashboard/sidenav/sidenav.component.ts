import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  constructor(private router: Router, private authService: AuthService) {}

  @ViewChild('drawer') drawer!: MatDrawer

  toggle(): void {
    this.drawer.toggle()
  }

  logout(): void {
    this.authService.logout()
  }
}
