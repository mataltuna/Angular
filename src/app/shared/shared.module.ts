import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

import { UserFullNamePipe } from './pipes/user-full-name.pipe';

import { HighlightDirective } from './directives/highlight.directive';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    UserFullNamePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    UserFullNamePipe,
    HighlightDirective,
    MatListModule,
    MatCardModule,
    MatBadgeModule
  ]
})
export class SharedModule {
  
}
