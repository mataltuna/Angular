import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./features/auth/auth.module').then((r) => r.AuthModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./features/dashboard/dashboard.module').then((r) => r.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
