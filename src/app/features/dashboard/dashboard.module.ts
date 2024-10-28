import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
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
    SharedModule
  ],
  exports: [DashboardComponent] 
})
export class DashboardModule { }
