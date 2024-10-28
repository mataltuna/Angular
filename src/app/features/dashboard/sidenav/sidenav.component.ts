import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  constructor(private router: Router) {}

  @ViewChild('drawer') drawer!: MatDrawer

  toggle(): void {
    this.drawer.toggle()
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(['auth', 'login'])
  }
}
