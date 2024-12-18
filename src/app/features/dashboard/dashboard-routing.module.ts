import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((r) => r.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((r) => r.UsersModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((r) => r.CoursesModule)
  },
  {
    path: 'lessons',
    loadChildren: () => import('./lessons/lessons.module').then((r) => r.LessonsModule)
  },
  {
    path: 'enrollments',
    loadChildren: () => import('./enrollments/enrollments.module').then((r) => r.EnrollmentsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then((r) => r.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
