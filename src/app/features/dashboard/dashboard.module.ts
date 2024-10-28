import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UsersModule,
    SharedModule
  ],
  exports: [DashboardComponent] 
})
export class DashboardModule { }
