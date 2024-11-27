import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { Observable } from 'rxjs';
import { Enrollment, User } from '../../../shared/models';
import { selectEnrollments, selectLoadEnrollError, selectIsLoadingEnroll, selectCoursesOptions, selectStudentsOptions } from './store/enrollment.selectors';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentsDialogComponent } from './enrollments-dialog/enrollments-dialog.component';
import Swal from 'sweetalert2';
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent implements OnInit {
  displayedColumns: string[] = ['idEnroll', 'studName', 'courseName'];
  enrollments$: Observable<Enrollment[]>
  loadEnrollError$: Observable<Error | null>
  isLoadingEnroll$: Observable<boolean>
  authUser$: Observable<User | null>

  constructor(
    private store: Store,
    private matDialog: MatDialog,
    private enrollmentService: EnrollmentsService,
    private authService: AuthService,
  ) {
    this.enrollments$ = this.store.select(selectEnrollments)
    this.isLoadingEnroll$ = this.store.select(selectIsLoadingEnroll)
    this.loadEnrollError$ = this.store.select(selectLoadEnrollError)
    this.authUser$ = this.authService.authUser$
  }

  ngOnInit(): void {
    this.store.dispatch(EnrollmentActions.loadEnrollments())
    this.store.dispatch(EnrollmentActions.loadCoursesAndStudentsOptions())
  }

  openModal(editingEnrollment?: Enrollment): void {
    this.matDialog
      .open(EnrollmentsDialogComponent, {
        data: {
          editingEnrollment
        }
      })
      .afterClosed()
      .subscribe({
        next: async (result) => {
          if(!!result) {
            if(editingEnrollment) {
              const swalResult = await this.showConfirmationDialog("guardar los cambios");
              if(swalResult.isConfirmed) {
                this.handleUpdate(editingEnrollment.id, result);
              }
            } else {

              this.enrollmentService
              .createEnroll(result)
              .subscribe({next: () => this.enrollmentService.getEnrollments()})
            
            }
          }
        }
      })
  }
  
  handleUpdate(id: string, update: Enrollment): void {
    this.store.dispatch(EnrollmentActions.updateEnrollment({ id, update }));
  }

  handleDelete(id: string): void {
    this.store.dispatch(EnrollmentActions.deleteEnrollment({ id }));
  }

  async showConfirmationDialog(obj:string) {
    return await Swal.fire({
      title: `¿Quieres ${obj}?`,
      showDenyButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`
    })
  }
}
