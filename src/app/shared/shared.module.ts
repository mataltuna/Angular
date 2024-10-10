import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ANGULAR MATERIAL */
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

/* PIPES */
import { UserFullNamePipe } from './pipes/user-full-name.pipe';

/* DIRECTIVES */
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    UserFullNamePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
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
  ]
})
export class SharedModule { }
